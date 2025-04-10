// import AddTask from './components/forms/AddTask';
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import List from './components/taskCategoryList/List';
import { useEffect, useState } from 'react';
import { Category, DeleteModal, Task, TaskModal } from './types/api';
import api from './utils/apiController';
import TaskForm from './components/forms/TaskForm';
import ReactModal from 'react-modal';
import FormModal from './components/forms/FormModal';
import DeleteDialog from './components/forms/DeleteDialog';

ReactModal.setAppElement('#root');

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [deleteModal, setDeleteModal] = useState<DeleteModal>({
    isOpen: false,
    elementId: null,
    type: null,
  });
  const [taskModal, setTaskModal] = useState<TaskModal>({
    isOpen: false,
    values: { id: null, name: '', categoryId: null, description: '' },
  });

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
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        // setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Header setTaskModal={setTaskModal} />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <List
                data={tasks}
                categories={categories}
                loading={loading}
                setDeleteModal={setDeleteModal}
              />
            }
          />
          <Route
            path="/categories"
            element={
              <List
                data={categories}
                loading={loading}
                setDeleteModal={setDeleteModal}
              />
            }
          />{' '}
        </Routes>
      </main>
      <FormModal isOpen={deleteModal.isOpen} type="delete">
        <DeleteDialog
          modalData={deleteModal}
          setModalData={setDeleteModal}
          tasks={tasks}
          categories={categories}
          setTasks={setTasks}
          setCategories={setCategories}
        />
      </FormModal>{' '}
      <FormModal isOpen={taskModal.isOpen}>
        <TaskForm
          tasks={tasks}
          categories={categories}
          setTasks={setTasks}
          setTaskModal={setTaskModal}
        />
      </FormModal>
    </>
  );
}

export default App;
