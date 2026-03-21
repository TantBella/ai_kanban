import { useState } from 'react';
import { Board as BoardType } from '../../types/index';
import { Column } from '../Column/Column';

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

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{board.name}</h1>
      <div className="flex gap-6">
        {board.columns.map((column) => (
          <Column key={column.id} column={column} />
        ))}
      </div>
    </div>
  );
}
