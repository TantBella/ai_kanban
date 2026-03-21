import type { Column } from '../../types/index';

export interface ColumnProps {
  column: Column;
  onAddCard: (columnId: string, title: string) => void;
  onDeleteCard: (columnId: string, taskId: string) => void;
}
