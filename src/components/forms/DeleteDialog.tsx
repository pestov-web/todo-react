import { Category, DeleteModal, Task } from '../../types/api';
import api from '../../utils/apiController';

function DeleteDialog({
  modalData,
  setModalData,
  tasks,
  categories,
  setTasks,
  setCategories,
}: {
  modalData: DeleteModal;
  setModalData: React.Dispatch<React.SetStateAction<DeleteModal>>;
  tasks: Task[];
  categories: Category[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}) {
  function handleDelete() {
    if (modalData.type === 'task') {
      api
        .removeTask(modalData.elementId!)
        .then((res) => {
          if (res === 200) {
            setTasks(tasks.filter((task) => task.id !== modalData.elementId));
            console.log('задача удалена');
          }
        })
        .catch((err) => {
          console.log(`ошибка: ${err}`);
        })
        .finally(() => {
          setModalData({
            isOpen: false,
            elementId: null,
            type: null,
          });
        });
    }
    if (modalData.type === 'category') {
      api
        .removeCategory(modalData.elementId!)
        .then((res) => {
          if (res === 200) {
            setCategories(
              categories.filter(
                (category) => category.id !== modalData.elementId
              )
            );
            console.log('категория удалена');
          }
        })
        .catch((err) => {
          console.log(`ошибка: ${err}`);
        })
        .finally(() => {
          setModalData({
            isOpen: false,
            elementId: null,
            type: null,
          });
        });
    }
  }

  function handleClose() {
    setModalData({
      isOpen: false,
      elementId: null,
      type: null,
    });
  }
  return (
    <div className="delete-dialog">
      <h2 className="delete-dialog__title">
        {modalData.type === 'task' ? 'Удаление задачи' : 'Удаление категории'}
      </h2>
      <div className="delete-dialog__buttons">
        {' '}
        <button
          className="button delete-dialog__btn delete-dialog__btn_delete"
          onClick={handleDelete}
        >
          Да
        </button>
        <button
          className="button delete-dialog__btn delete-dialog__btn_close"
          onClick={handleClose}
        >
          Нет
        </button>
      </div>
    </div>
  );
}

export default DeleteDialog;
