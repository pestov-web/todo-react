// import AddTask from './components/forms/AddTask';
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import List from './components/taskCategoryList/List';
import { useEffect, useState } from 'react';
import { Category, Tasks } from './types/api';
import api from './utils/apiController';

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
        // setTimeout(() => {
        //   setLoading(false);
        // }, 5000);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <List data={tasks} categories={categories} loading={loading} />
            }
          />
          <Route
            path="/categories"
            element={<List data={categories} loading={loading} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
