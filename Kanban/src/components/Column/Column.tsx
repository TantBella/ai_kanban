import { useState } from 'react';
import type { ColumnProps } from './Column.types';
import { Card } from '../Card/Card';

export function Column({ column, onAddCard, onDeleteCard }: ColumnProps) {
  const [inputValue, setInputValue] = useState('');
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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddCard();
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg p-4 w-80 flex flex-col min-h-96">
      <h2 className="font-bold text-gray-800 mb-4">{column.name}</h2>
      <div className="space-y-3 flex-1">
        {column.tasks.map((task) => (
          <Card key={task.id} task={task} onDelete={handleDeleteCard} />
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
