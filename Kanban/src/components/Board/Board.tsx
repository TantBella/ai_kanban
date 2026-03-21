import { useState, useCallback } from 'react';
import type { Board as BoardType } from '../../types/index';
import { Column } from '../Column/Column';
import { WelcomeBanner } from '../WelcomeBanner/WelcomeBanner';

export function Board() {
  const [board, setBoard] = useState<BoardType>({
    id: '1',
    name: 'My Board',
    columns: [
      {
        id: 'col-1',
        name: 'To Do',
        tasks: [],
      },
      {
        id: 'col-2',
        name: 'In Progress',
        tasks: [],
      },
      {
        id: 'col-3',
        name: 'Done',
        tasks: [],
      },
    ],
  });

  const handleAddCard = useCallback((columnId: string, title: string) => {
    setBoard((prevBoard) => ({
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
    }));
  }, []);

  const handleDeleteCard = useCallback((columnId: string, taskId: string) => {
    setBoard((prevBoard) => ({
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
    }));
  }, []);

  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{board.name}</h1>
      <WelcomeBanner />
      <div className="flex gap-6">
        {board.columns.map((column) => (
          <Column key={column.id} column={column} onAddCard={handleAddCard} onDeleteCard={handleDeleteCard} />
        ))}
      </div>
    </div>
  );
}
