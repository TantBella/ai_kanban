import type { ColumnProps } from './Column.types';
import { Card } from '../Card/Card';

export function Column({ column }: ColumnProps) {
  const isEmpty = column.tasks.length === 0;

  return (
    <div className="bg-gray-100 rounded-lg p-4 w-80 flex flex-col min-h-96">
      <h2 className="font-bold text-gray-800 mb-4">{column.name}</h2>
      <div className="space-y-3 flex-1">
        {column.tasks.map((task) => (
          <Card key={task.id} task={task} />
        ))}
        {isEmpty && (
          <div className="flex items-center justify-center h-32 text-gray-400">
            <p className="text-sm text-center">Add a card to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}
