import axios, { AxiosResponse } from 'axios';
import { Category, Task } from '../types/api';

class Api {
  private baseUrl: string;

  constructor(url: string) {
    this.baseUrl = url;
  }

  // POST
  private async post<T>(endpoint: string, data?: object): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.post(
        `${this.baseUrl}${endpoint}`,
        data
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to POST to ${endpoint}: ${error}`);
    }
  }

  // Получение всех задач
  async getTasks(): Promise<Task[]> {
    try {
      const response: AxiosResponse<Task[]> = await axios.get(
        `${this.baseUrl}/GetTasks`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to fetch tasks: ${error}`);
    }
  }

  // Получение всех категорий
  async getCategories(): Promise<Category[]> {
    try {
      const response: AxiosResponse<Category[]> = await axios.get(
        `${this.baseUrl}/GetCategories`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to fetch categories: ${error}`);
    }
  }

  // Удаление задачи
  async removeTask(taskId: number): Promise<Task> {
    return this.post<Task>(`/RemoveTask/${taskId}`);
  }

  // Удаление категории
  async removeCategory(categoryId: number): Promise<Category> {
    return this.post<Category>(`/RemoveCategory/${categoryId}`);
  }

  // Добавление задачи
  async addTask(body: Task): Promise<Task> {
    const payload = {
      id: body.id,
      name: body.name,
      description: body.description,
      categoryId: body.categoryId,
    };
    return this.post<Task>('/AddTask', payload);
  }

  // Добавление категории
  async addCategory(body: Category): Promise<Category> {
    const payload = {
      id: body.id,
      name: body.name,
      description: body.description,
    };
    return this.post<Category>('/AddCategory', payload);
  }

  // Обновление задачи
  async updateTask(body: Task): Promise<Task> {
    const payload = {
      id: body.id,
      name: body.name,
      description: body.description,
      categoryId: body.categoryId,
    };
    return this.post<Task>('/UpdateTask', payload);
  }

  // Обновление категории
  async updateCategory(body: Category): Promise<Category> {
    const payload = {
      id: body.id,
      name: body.name,
      description: body.description,
    };
    return this.post<Category>('/UpdateCategory', payload);
  }
}

const api = new Api(
  import.meta.env.VITE_API_URL || 'http://localhost:8089/api/ToDoList'
);

export default api;
