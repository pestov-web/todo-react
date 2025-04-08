import axios from 'axios';
import { Category, Tasks } from '../types/api';
class Api {
  baseUrl: string;
  constructor(url: string) {
    this.baseUrl = url;
  }
  // получаем тудушки
  async getTasks(): Promise<Tasks> {
    try {
      const response: Tasks = await axios.get(`${this.baseUrl}/GetTasks`);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(`${error}, Failed to fetch`);
    }
  }
  //  получаем категории
  async getCategories(): Promise<Category> {
    try {
      const response: Category = await axios.get(
        `${this.baseUrl}/GetCategories`
      );
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      throw new Error(`${error}, Failed to fetch`);
    }
  }
  // удаляем тудушку
  async removeTask(taskId: number) {
    await axios
      .post(`${this.baseUrl}/RemoveTask/${taskId}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // удаляем категорию
  async removeCategory(categoryId: number) {
    await axios
      .post(`${this.baseUrl}/RemoveCategory/${categoryId}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // добавляем тудушку
  async addTask(body: Tasks) {
    await axios
      .post(`${this.baseUrl}/AddTask`, {
        id: body.id,
        name: body,
        description: body.description,
        categoryId: body.categoryId,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // добавляем категорию
  async addCategory(body: Category) {
    await axios
      .post(`${this.baseUrl}/AddCategory`, {
        id: body.id,
        name: body,
        description: body.description,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // обновляем тудушку
  async updateTask(body: Tasks) {
    await axios
      .post(`${this.baseUrl}/UpdateTask`, {
        id: body.id,
        name: body,
        description: body.description,
        categoryId: body.categoryId,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // обновляем категорию
  async updateCategory(body: Category) {
    await axios
      .post(`${this.baseUrl}/UpdateCategory`, {
        id: body.id,
        name: body,
        description: body.description,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

const api = new Api('http://localhost:8089/api/ToDoList');

export default api;
