import type { CardProps } from './Card.types';

export function Card({ task }: CardProps) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer">
      <p className="text-sm font-medium text-gray-800">{task.title}</p>
      {task.description && (
        <p className="text-xs text-gray-600 mt-2">{task.description}</p>
      )}
    </div>
  );
}
