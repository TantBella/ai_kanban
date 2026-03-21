import { Card } from '../Card/Card';
import { ColumnProps } from './Column.types';

export function Column({ column }: ColumnProps) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 w-80 flex flex-col">
      <h2 className="font-bold text-gray-800 mb-4">{column.name}</h2>
      <div className="space-y-3 flex-1">
        {column.tasks.map((task) => (
          <Card key={task.id} task={task} columnId={column.id} />
        ))}
      </div>
    </div>
  );
}
