import { useState, useCallback, useEffect } from 'react';
import type { Board as BoardType } from '../../types/index';
import { Column } from '../Column/Column';
import { WelcomeBanner } from '../WelcomeBanner/WelcomeBanner';

interface BoardProps {
  board: BoardType;
  onUpdateBoard: (board: BoardType) => void;
}

export function Board({ board, onUpdateBoard }: BoardProps) {
  const [localBoard, setLocalBoard] = useState<BoardType>(board);

  useEffect(() => {
    setLocalBoard(board);
  }, [board]);

  const handleAddCard = useCallback((columnId: string, title: string) => {
    setLocalBoard((prevBoard) => {
      const updatedBoard = {
        ...prevBoard,
        columns: prevBoard.columns.map((col) => {
          if (col.id === columnId) {
            return {
              ...col,
              tasks: [
                ...col.tasks,
                {
                  id: `task-${Date.now()}`,
                  title,
                },
              ],
            };
          }
          return col;
        }),
      };
      onUpdateBoard(updatedBoard);
      return updatedBoard;
    });
  }, [onUpdateBoard]);

  const handleDeleteCard = useCallback((columnId: string, taskId: string) => {
    setLocalBoard((prevBoard) => {
      const updatedBoard = {
        ...prevBoard,
        columns: prevBoard.columns.map((col) => {
          if (col.id === columnId) {
            return {
              ...col,
              tasks: col.tasks.filter((task) => task.id !== taskId),
            };
          }
          return col;
        }),
      };
      onUpdateBoard(updatedBoard);
      return updatedBoard;
    });
  }, [onUpdateBoard]);

  const handleEditCard = useCallback((columnId: string, taskId: string, newTitle: string) => {
    setLocalBoard((prevBoard) => {
      const updatedBoard = {
        ...prevBoard,
        columns: prevBoard.columns.map((col) => {
          if (col.id === columnId) {
            return {
              ...col,
              tasks: col.tasks.map((task) =>
                task.id === taskId ? { ...task, title: newTitle } : task
              ),
            };
          }
          return col;
        }),
      };
      onUpdateBoard(updatedBoard);
      return updatedBoard;
    });
  }, [onUpdateBoard]);

  const handleMoveCard = useCallback(
    (sourceColumnId: string, targetColumnId: string, _taskId: string, sourceIndex: number, targetIndex: number) => {
      setLocalBoard((prevBoard) => {
        const newColumns = prevBoard.columns.map((col) => ({
          ...col,
          tasks: [...col.tasks],
        }));
        const sourceColumn = newColumns.find((col) => col.id === sourceColumnId);
        const targetColumn = newColumns.find((col) => col.id === targetColumnId);

        if (!sourceColumn || !targetColumn) return prevBoard;

        const taskToMove = sourceColumn.tasks[sourceIndex];
        if (!taskToMove) return prevBoard;

        if (sourceColumnId === targetColumnId) {
          sourceColumn.tasks.splice(sourceIndex, 1);
          sourceColumn.tasks.splice(targetIndex, 0, taskToMove);
        } else {
          sourceColumn.tasks.splice(sourceIndex, 1);
          targetColumn.tasks.splice(targetIndex, 0, taskToMove);
        }

        const updatedBoard = { ...prevBoard, columns: newColumns };
        onUpdateBoard(updatedBoard);
        return updatedBoard;
      });
    },
    [onUpdateBoard]
  );

  const handleAddColumn = useCallback((columnName: string) => {
    setLocalBoard((prevBoard) => {
      const updatedBoard = {
        ...prevBoard,
        columns: [
          ...prevBoard.columns,
          {
            id: `col-${Date.now()}`,
            name: columnName,
            tasks: [],
          },
        ],
      };
      onUpdateBoard(updatedBoard);
      return updatedBoard;
    });
  }, [onUpdateBoard]);

  const handleRenameColumn = useCallback((columnId: string, newName: string) => {
    setLocalBoard((prevBoard) => {
      const updatedBoard = {
        ...prevBoard,
        columns: prevBoard.columns.map((col) =>
          col.id === columnId ? { ...col, name: newName } : col
        ),
      };
      onUpdateBoard(updatedBoard);
      return updatedBoard;
    });
  }, [onUpdateBoard]);

  const handleDeleteColumn = useCallback((columnId: string) => {
    setLocalBoard((prevBoard) => {
      if (prevBoard.columns.length <= 1) return prevBoard;
      const updatedBoard = {
        ...prevBoard,
        columns: prevBoard.columns.filter((col) => col.id !== columnId),
      };
      onUpdateBoard(updatedBoard);
      return updatedBoard;
    });
  }, [onUpdateBoard]);

  return (
    <div className="p-8 bg-white">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{localBoard.name}</h1>
      <WelcomeBanner />
      <div className="flex gap-6 items-start">
        {localBoard.columns.map((column) => (
          <Column
            key={column.id}
            column={column}
            onAddCard={handleAddCard}
            onDeleteCard={handleDeleteCard}
            onEditCard={handleEditCard}
            onMoveCard={handleMoveCard}
            onRenameColumn={handleRenameColumn}
            onDeleteColumn={handleDeleteColumn}
          />
        ))}
        <button
          onClick={() => {
            const columnName = prompt('Enter column name:');
            if (columnName && columnName.trim()) {
              handleAddColumn(columnName.trim());
            }
          }}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-6 transition-colors"
          title="Add a new column"
        >
          + Add Column
        </button>
      </div>
    </div>
  );
}
