interface Category {
  id: number;
  name: string;
  description: string;
}

interface Tasks extends Category {
  categoryId: number;
}

export type { Category, Tasks };
