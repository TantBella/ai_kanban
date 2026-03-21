import type { Column } from '../../types/index';

export interface ColumnProps {
  column: Column;
  onAddCard: (columnId: string, title: string) => void;
  onDeleteCard: (columnId: string, taskId: string) => void;
  onEditCard: (columnId: string, taskId: string, newTitle: string) => void;
  onMoveCard: (sourceColumnId: string, targetColumnId: string, taskId: string, sourceIndex: number, targetIndex: number) => void;
  onRenameColumn: (columnId: string, newName: string) => void;
  onDeleteColumn: (columnId: string) => void;
}
