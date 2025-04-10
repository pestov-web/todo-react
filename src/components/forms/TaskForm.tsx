import { Formik, Field, Form } from 'formik';
import { Category, Task, TaskModal } from '../../types/api';
import * as Yup from 'yup';
import api from '../../utils/apiController';

function TaskForm({
  task,
  tasks,
  categories,
  setTasks,
  setTaskModal,
}: {
  task?: Task;
  tasks: Task[];
  categories: Category[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setTaskModal: React.Dispatch<React.SetStateAction<TaskModal>>;
}) {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .max(255, 'Максимум 255 символов')
      .required('Введите название задачи!'),
    categoryId: Yup.string().required('Введите категорию задачи!'),
    description: Yup.string().max(1536, 'Максимум 1536 символов'),
  });

  const handleSubmit = (values: Task) => {
    if (task) {
      console.log(`updating task: ${JSON.stringify(values)}`);
    } else {
      values.categoryId = Number(values.categoryId);
      console.log(`adding task: ${JSON.stringify(values)}`);
      api
        .addTask(values as Task)
        .then((res) => {
          setTasks([...tasks, res]);
        })
        .catch((err) => {
          console.log(`ошибка: ${err}`);
        })
        .finally(() => {
          setTaskModal({
            isOpen: false,
            values: {
              id: null,
              name: '',
              categoryId: 'null',
              description: '',
            },
          });
        });
    }
  };
  return (
    <div>
      <h2>{task ? 'Редактирование задачи' : 'Добавление задачи'}</h2>
      <Formik
        initialValues={{
          id: task ? task.id : 0,
          name: task ? task.name : '',
          categoryId: task ? task.categoryId : null,
          description: task ? task.description : '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values: Task) => {
          handleSubmit(values);
        }}
      >
        {({ errors }) => (
          <Form className="form">
            <label htmlFor="name" className="form__label">
              <Field
                id="name"
                name="name"
                placeholder="Введите имя задачи"
                className="form__input"
                required
              />
              <span className="form__label-title">
                Название{' '}
                <span className="form__label-error">
                  {errors.name ? '*' : ''}
                </span>
              </span>
            </label>

            <label
              htmlFor="category"
              className="form__label form__label-category"
            >
              <Field
                as="select"
                id="categoryId"
                name="categoryId"
                placeholder="Выберите категорию"
                className="form__input form__input-select"
                required
              >
                <option value="" disabled selected>
                  Выберите категорию
                </option>
                {categories.map((category: Category) => (
                  <option
                    key={category.id}
                    value={category.id ?? ''}
                    className="form__input-option"
                  >
                    {category.name}
                  </option>
                ))}
              </Field>
              <span className="form__label-title">
                Категория{' '}
                <span className="form__label-error">
                  {errors.categoryId ? '*' : ''}
                </span>
              </span>
            </label>

            <label
              htmlFor="description"
              className="form__label form__label-description"
            >
              <Field
                as="textarea"
                id="description"
                name="description"
                placeholder="Введите описание задачи"
                type="textarea"
                className="form__input form__input-textarea"
              />
              <span className="form__label-title">
                Описание{' '}
                <span className="form__label-error">
                  {errors.description ? '*' : ''}
                </span>
              </span>
            </label>

            <div className="form__buttons-container">
              <button className="button form__submit-btn" type="submit">
                Создать
              </button>
              <button
                className="button form__close-btn"
                onClick={() =>
                  setTaskModal({
                    isOpen: false,
                    values: {
                      id: null,
                      name: '',
                      categoryId: null,
                      description: '',
                    },
                  })
                }
              >
                Закрыть
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
