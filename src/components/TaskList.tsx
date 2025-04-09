import { useEffect, useState } from 'react';
import api from '../utils/apiController';
import { Tasks, Category } from '../types/api';

function TaskList() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [tasksData, categoriesData] = await Promise.all([
          api.getTasks(),
          api.getCategories(),
        ]);
        setTasks(tasksData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Ошибка при загрузке:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div>Загрузка...</div>;

  return (
    <div>
      <h2>Задачи</h2>
      <ul>
        {tasks.map((task) => {
          const category = categories.find(
            (item) => item.id === task.categoryId
          );
          return (
            <li key={task.id}>
              <strong>{task.name}</strong> — {task.description}
              {category && (
                <div style={{ fontSize: '0.85em', color: '#888' }}>
                  Категория: {category.name}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <h2>Категории</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <strong>{category.name}</strong> — {category.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
