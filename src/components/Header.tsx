import { TaskModal } from '../types/api';
import NavMenu from './NavMenu';

function Header({
  setTaskModal,
}: {
  setTaskModal: React.Dispatch<React.SetStateAction<TaskModal>>;
}) {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">ToDo List</h1>
        <NavMenu />
        <button
          className="button header__button"
          onClick={() =>
            setTaskModal({
              isOpen: true,
              values: { id: null, name: '', categoryId: null, description: '' },
            })
          }
        >
          Добавить задачу
        </button>
      </div>
    </header>
  );
}

export default Header;
