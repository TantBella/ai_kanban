export interface Task {
  id: string;
  title: string;
  description?: string;
}

export interface Column {
  id: string;
  name: string;
  tasks: Task[];
}

export interface Board {
  id: string;
  name: string;
  columns: Column[];
}

export interface AppState {
  boards: Board[];
  selectedBoardId: string;
}
