interface Category {
  id: number | null;
  name: string;
  description: string;
}

interface Task extends Category {
  categoryId: number | string | null;
}

interface DeleteModal {
  isOpen: boolean;
  elementId: number | null;
  type: 'task' | 'category' | null;
}

interface TaskModal {
  isOpen: boolean;
  values: Task;
}

export type { Category, Task, DeleteModal, TaskModal };
