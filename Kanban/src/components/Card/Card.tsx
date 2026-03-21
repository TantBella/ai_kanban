import { useState, useRef } from 'react';
import type { CardProps } from './Card.types';

export function Card({ task, onDelete, onEdit, columnId, taskIndex }: CardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.title);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDeleteClick = () => {
    if (window.confirm(`Delete task "${task.title}"?`)) {
      onDelete(task.id);
    }
  };

  const handleStartEdit = () => {
    setIsEditing(true);
    setEditValue(task.title);
  };

  const handleSaveEdit = () => {
    const trimmedValue = editValue.trim();
    if (trimmedValue && trimmedValue !== task.title) {
      onEdit(task.id, trimmedValue);
    }
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditValue(task.title);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const dragData = {
      taskId: task.id,
      sourceColumnId: columnId,
      sourceIndex: taskIndex,
    };
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('application/json', JSON.stringify(dragData));
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`bg-white p-4 rounded shadow transition-all group relative ${
        isDragging ? 'opacity-50 cursor-grabbing' : 'hover:shadow-lg cursor-grab'
      }`}
    >
      <div className="flex justify-between items-start gap-2">
        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSaveEdit}
            autoFocus
            className="flex-1 px-2 py-1 text-sm border border-blue-500 rounded focus:outline-none bg-white"
          />
        ) : (
          <p
            onClick={handleStartEdit}
            className="text-sm font-medium text-gray-800 flex-1 cursor-pointer hover:bg-gray-100 p-1 rounded transition-colors"
          >
            {task.title}
          </p>
        )}
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
      {task.description && !isEditing && (
        <p className="text-xs text-gray-600 mt-2">{task.description}</p>
      )}
    </div>
  );
}
