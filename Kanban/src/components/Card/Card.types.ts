import type { Task } from '../../types/index';

export interface CardProps {
  task: Task;
  columnId: string;
  taskIndex: number;
  onDelete: (taskId: string) => void;
  onEdit: (taskId: string, newTitle: string) => void;
}
