import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Category, Task } from '../../types/api';
import * as Yup from 'yup';

interface Values {
  name: string;
  category: string | number;
  description: string;
}

function TaskForm({
  task,
  categories,
}: {
  task?: Task;
  categories: Category[];
}) {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .max(255, 'Максимум 255 символов')
      .required('Введите название задачи!'),
    category: Yup.string().required('Введите категорию задачи!'),
    description: Yup.string().max(1536, 'Максимум 1536 символов'),
  });
  return (
    <div>
      <h2>{task ? 'Редактирование задачи' : 'Добавление задачи'}</h2>
      <Formik
        initialValues={{
          name: task ? task.name : '',
          category: task ? task.categoryId : '',
          description: task ? task.description : '',
        }}
        validationSchema={validationSchema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ errors }) => (
          <Form className="form">
            <label htmlFor="name" className="form__label">
              <Field
                id="name"
                name="name"
                placeholder="Введите имя задачи"
                className="form__input "
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
                id="category"
                name="category"
                placeholder="Выберите категорию"
                className="form__input"
              >
                <option value="" className="form__option">
                  Выберите категорию
                </option>
                {categories.map((category: Category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Field>
              <span className="form__label-title">
                Категория
                <span className="form__label-error">
                  {errors.category ? '*' : ''}
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
                Описание
                <span className="form__label-error">
                  {errors.description ? '*' : ''}
                </span>
              </span>
            </label>

            <div className="form__buttons-container">
              <button className="button form__submit-btn" type="submit">
                Создать
              </button>
              <button className="button form__close-btn">Закрыть</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
