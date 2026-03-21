import { useState, useRef, useEffect } from 'react';
import type { Board } from '../../types/index';

interface BoardSelectorProps {
  boards: Board[];
  selectedBoardId: string;
  onSelectBoard: (boardId: string) => void;
  onCreateBoard: (boardName: string) => void;
  onRenameBoard: (boardId: string, newName: string) => void;
  onDeleteBoard: (boardId: string) => void;
}

export function BoardSelector({
  boards,
  selectedBoardId,
  onSelectBoard,
  onCreateBoard,
  onRenameBoard,
  onDeleteBoard,
}: BoardSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [renamingBoardId, setRenamingBoardId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedBoard = boards.find((b) => b.id === selectedBoardId);

  const handleCreateClick = () => {
    const boardName = prompt('Enter board name:');
    if (boardName && boardName.trim()) {
      onCreateBoard(boardName.trim());
      setIsOpen(false);
    }
  };

  const handleRenameClick = (board: Board, e: React.MouseEvent) => {
    e.stopPropagation();
    setRenamingBoardId(board.id);
    setRenameValue(board.name);
  };

  const handleRenameSave = (boardId: string) => {
    const trimmedValue = renameValue.trim();
    if (trimmedValue && trimmedValue !== boards.find((b) => b.id === boardId)?.name) {
      onRenameBoard(boardId, trimmedValue);
    }
    setRenamingBoardId(null);
  };

  const handleRenameKeyDown = (e: React.KeyboardEvent, boardId: string) => {
    if (e.key === 'Enter') {
      handleRenameSave(boardId);
    } else if (e.key === 'Escape') {
      setRenamingBoardId(null);
    }
  };

  const handleDeleteClick = (board: Board, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm(`Delete board "${board.name}"?`)) {
      onDeleteBoard(board.id);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        title="Select a board"
      >
        {selectedBoard?.name || 'Select Board'} ▼
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-300 rounded shadow-lg z-50">
          <div className="p-2 max-h-80 overflow-y-auto">
            {boards.map((board) => (
              <div key={board.id} className="flex items-center justify-between p-2 hover:bg-gray-100 rounded group">
                {renamingBoardId === board.id ? (
                  <input
                    type="text"
                    value={renameValue}
                    onChange={(e) => setRenameValue(e.target.value)}
                    onKeyDown={(e) => handleRenameKeyDown(e, board.id)}
                    onBlur={() => handleRenameSave(board.id)}
                    autoFocus
                    className="flex-1 px-2 py-1 text-sm border border-blue-500 rounded focus:outline-none"
                  />
                ) : (
                  <button
                    onClick={() => {
                      onSelectBoard(board.id);
                      setIsOpen(false);
                    }}
                    className={`flex-1 text-left px-2 py-1 text-sm rounded transition-colors ${
                      board.id === selectedBoardId
                        ? 'bg-blue-100 text-blue-900 font-semibold'
                        : 'text-gray-800'
                    }`}
                  >
                    {board.name}
                  </button>
                )}
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => handleRenameClick(board, e)}
                    className="p-1 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded"
                    title="Rename board"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={(e) => handleDeleteClick(board, e)}
                    className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded disabled:opacity-50"
                    title="Delete board"
                    disabled={boards.length <= 1}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleCreateClick}
            className="w-full px-2 py-2 text-sm text-left bg-gray-100 hover:bg-gray-200 border-t border-gray-300 text-blue-600 font-semibold transition-colors"
          >
            + New Board
          </button>
        </div>
      )}
    </div>
  );
}
