import type { Task } from '../../types/index';

export interface CardProps {
  task: Task;
  onDelete: (taskId: string) => void;
  onEdit: (taskId: string, newTitle: string) => void;
}
