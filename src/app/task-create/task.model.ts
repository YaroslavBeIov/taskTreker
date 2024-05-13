export interface Task {
    id: any;
    title: string;
    description?: string;
    deadline: string;
    priority: 'низкий' | 'средний' | 'высокий';
    status: 'сделать' | 'в процессе' | 'сделано';
    assignees: string[];
}
  