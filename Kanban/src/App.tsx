import { useState, useCallback, useEffect } from 'react';
import type { Board, AppState } from './types/index';
import { Board as BoardComponent } from './components/Board/Board';
import { BoardSelector } from './components/BoardSelector/BoardSelector';

const STORAGE_KEY = 'kanban-app-state';

const DEFAULT_BOARD: Board = {
  id: 'board-1',
  name: 'My Board',
  columns: [
    { id: 'col-1', name: 'To Do', tasks: [] },
    { id: 'col-2', name: 'In Progress', tasks: [] },
    { id: 'col-3', name: 'Done', tasks: [] },
  ],
};

const DEFAULT_STATE: AppState = {
  boards: [DEFAULT_BOARD],
  selectedBoardId: 'board-1',
};

function loadAppState(): AppState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.boards && parsed.selectedBoardId) {
        return parsed;
      }
    }
  } catch (error) {
    console.error('Failed to load app state from storage:', error);
  }
  return DEFAULT_STATE;
}

function App() {
  const [appState, setAppState] = useState<AppState>(loadAppState);

  const handleCreateBoard = useCallback((boardName: string) => {
    setAppState((prevState) => {
      const newBoard: Board = {
        id: `board-${Date.now()}`,
        name: boardName,
        columns: [
          { id: `col-1`, name: 'To Do', tasks: [] },
          { id: `col-2`, name: 'In Progress', tasks: [] },
          { id: `col-3`, name: 'Done', tasks: [] },
        ],
      };
      return {
        boards: [...prevState.boards, newBoard],
        selectedBoardId: newBoard.id,
      };
    });
  }, []);

  const handleSelectBoard = useCallback((boardId: string) => {
    setAppState((prevState) => ({
      ...prevState,
      selectedBoardId: boardId,
    }));
  }, []);

  const handleRenameBoard = useCallback((boardId: string, newName: string) => {
    setAppState((prevState) => ({
      ...prevState,
      boards: prevState.boards.map((board) =>
        board.id === boardId ? { ...board, name: newName } : board
      ),
    }));
  }, []);

  const handleDeleteBoard = useCallback((boardId: string) => {
    setAppState((prevState) => {
      if (prevState.boards.length <= 1) return prevState;

      const remainingBoards = prevState.boards.filter((board) => board.id !== boardId);
      const newSelectedId =
        prevState.selectedBoardId === boardId
          ? remainingBoards[0].id
          : prevState.selectedBoardId;

      return {
        boards: remainingBoards,
        selectedBoardId: newSelectedId,
      };
    });
  }, []);

  const handleUpdateSelectedBoard = useCallback((updatedBoard: Board) => {
    setAppState((prevState) => ({
      ...prevState,
      boards: prevState.boards.map((board) =>
        board.id === updatedBoard.id ? updatedBoard : board
      ),
    }));
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (error) {
      console.error('Failed to save app state to storage:', error);
    }
  }, [appState]);

  const selectedBoard = appState.boards.find((b) => b.id === appState.selectedBoardId);

  if (!selectedBoard) {
    return <div className="p-8">No board selected</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">TaskTopia</h1>
        <BoardSelector
          boards={appState.boards}
          selectedBoardId={appState.selectedBoardId}
          onSelectBoard={handleSelectBoard}
          onCreateBoard={handleCreateBoard}
          onRenameBoard={handleRenameBoard}
          onDeleteBoard={handleDeleteBoard}
        />
      </div>
      <BoardComponent board={selectedBoard} onUpdateBoard={handleUpdateSelectedBoard} />
    </div>
  );
}

export default App;
