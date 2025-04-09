interface Category {
  id: number;
  name: string;
  description: string;
}

interface Task extends Category {
  categoryId: number;
}

export type { Category, Task };
