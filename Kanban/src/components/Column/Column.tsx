import { useState } from 'react';
import type { ColumnProps } from './Column.types';
import { Card } from '../Card/Card';

export function Column({ column, onAddCard, onDeleteCard, onEditCard, onMoveCard }: ColumnProps) {
  const [inputValue, setInputValue] = useState('');
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const isEmpty = column.tasks.length === 0 && inputValue === '';

  const handleAddCard = () => {
    if (inputValue.trim()) {
      onAddCard(column.id, inputValue);
      setInputValue('');
    }
  };

  const handleDeleteCard = (taskId: string) => {
    onDeleteCard(column.id, taskId);
  };

  const handleEditCard = (taskId: string, newTitle: string) => {
    onEditCard(column.id, taskId, newTitle);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setIsDraggedOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggedOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggedOver(false);
    
    try {
      const dragData = JSON.parse(e.dataTransfer.getData('application/json'));
      const { taskId, sourceColumnId, sourceIndex } = dragData;
      
      const targetIndex = column.tasks.length;
      onMoveCard(sourceColumnId, column.id, taskId, sourceIndex, targetIndex);
    } catch (error) {
      console.error('Failed to parse drag data:', error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddCard();
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`bg-gray-100 rounded-lg p-4 w-80 flex flex-col min-h-96 transition-colors ${
        isDraggedOver ? 'bg-blue-100 ring-2 ring-blue-400' : ''
      }`}
    >
      <h2 className="font-bold text-gray-800 mb-4">{column.name}</h2>
      <div className="space-y-3 flex-1">
        {column.tasks.map((task, index) => (
          <Card 
            key={task.id} 
            task={task} 
            columnId={column.id}
            taskIndex={index}
            onDelete={handleDeleteCard} 
            onEdit={handleEditCard} 
          />
        ))}
        {isEmpty && (
          <div className="flex items-center justify-center h-32 text-gray-400">
            <p className="text-sm text-center">Add a card to get started</p>
          </div>
        )}
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a card..."
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none placeholder-gray-400"
        />
      </div>
    </div>
  );
}
