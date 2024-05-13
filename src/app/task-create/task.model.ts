export interface Task {
    id: any;
    title: string;
    description?: string;
    deadline: string;
    priority: 'low' | 'medium' | 'high';
    status: 'todo' | 'inprogress' | 'done';
    assignees: string[];
}
  