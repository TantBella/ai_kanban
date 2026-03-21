import type { CardProps } from './Card.types';

export function Card({ task, onDelete }: CardProps) {
  const handleDeleteClick = () => {
    if (window.confirm(`Delete task "${task.title}"?`)) {
      onDelete(task.id);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow group relative">
      <div className="flex justify-between items-start gap-2">
        <p className="text-sm font-medium text-gray-800 flex-1">{task.title}</p>
        <button
          onClick={handleDeleteClick}
          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
          title="Delete task"
          aria-label="Delete task"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      {task.description && (
        <p className="text-xs text-gray-600 mt-2">{task.description}</p>
      )}
    </div>
  );
}
