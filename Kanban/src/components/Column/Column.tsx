import { useState } from 'react';
import type { ColumnProps } from './Column.types';
import { Card } from '../Card/Card';
import { useTheme } from '../../hooks/useTheme';
import { THEMES } from '../../styles/themes';

export function Column({ column, onAddCard, onDeleteCard, onEditCard, onMoveCard, onRenameColumn, onDeleteColumn }: ColumnProps) {
  const [inputValue, setInputValue] = useState('');
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const [isRenamingColumn, setIsRenamingColumn] = useState(false);
  const [renameValue, setRenameValue] = useState(column.name);
  const { theme } = useTheme();
  const themeColors = THEMES[theme];
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

  const handleDeleteColumn = () => {
    if (window.confirm(`Delete column "${column.name}"?`)) {
      onDeleteColumn(column.id);
    }
  };

  const handleRenameStart = () => {
    setIsRenamingColumn(true);
    setRenameValue(column.name);
  };

  const handleRenameSave = () => {
    const trimmedValue = renameValue.trim();
    if (trimmedValue && trimmedValue !== column.name) {
      onRenameColumn(column.id, trimmedValue);
    }
    setIsRenamingColumn(false);
  };

  const handleRenameCancel = () => {
    setIsRenamingColumn(false);
    setRenameValue(column.name);
  };

  const handleRenameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleRenameSave();
    } else if (e.key === 'Escape') {
      handleRenameCancel();
    }
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
      className={`rounded-lg p-4 flex-shrink-0 flex flex-col min-h-96 transition-colors ${
        isDraggedOver ? 'ring-2' : ''
      }`}
      style={{
        backgroundColor: themeColors.surface,
        boxShadow: isDraggedOver ? `0 0 0 2px ${themeColors.secondary}` : 'none',
        width: 'min(320px, calc(100% - 1.5rem))',
        minWidth: '280px'
      }}
    >
      <div className="flex text-md justify-between items-center mb-4 group">
        {isRenamingColumn ? (
          <input
            type="text"
            value={renameValue}
            onChange={(e) => setRenameValue(e.target.value)}
            onKeyDown={handleRenameKeyDown}
            onBlur={handleRenameSave}
            autoFocus
            className="flex-1 px-2 py-1  border rounded focus:outline-none bg-white  text-gray-800"
            style={{ borderColor:  themeColors.secondary }}
          />
        ) : (
          <h2 
            onClick={handleRenameStart}
            className=" text-gray-800 flex-1 cursor-pointer hover:bg-gray-200 p-1 rounded transition-colors text-md"
          >
            {column.name}
          </h2>
        )}
        <button
          onClick={handleDeleteColumn}
          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
          title="Delete column"
          aria-label="Delete column"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
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
          <div className="text-sm flex items-center justify-center h-32 text-gray-500">
            <p className=" text-center">Add a card to get started</p>
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
          className="w-full px-3 py-2  border rounded bg-white hover:bg-gray-50 focus:bg-white focus:outline-none placeholder-gray-400"
          style={{ borderColor:  themeColors.secondary}}
        />
      </div>
    </div>
  );
}
