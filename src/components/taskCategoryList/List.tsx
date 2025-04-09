import { useEffect, useState } from 'react';
import api from '../../utils/apiController';
import { Tasks, Category } from '../../types/api';
import ListItem from './ListItem';
import ListSkeleton from './ListSkeleton';
import Modal from 'react-modal';

function List({
  setIsOpen,
  modalIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
  modalIsOpen: boolean;
}) {
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
        // setTimeout(() => {
        //   setLoading(false);
        // }, 5000);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  if (loading) return <ListSkeleton />;

  return (
    <>
      <ul className="list">
        {tasks.map((task) => {
          const category = categories.find(
            (item) => item.id === task.categoryId
          );
          return (
            <li key={task.id} className="list__item">
              <ListItem task={task} category={category} />
            </li>
          );
        })}
      </ul>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </>
  );
}

export default List;
