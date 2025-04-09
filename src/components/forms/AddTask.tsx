import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
  name: string;
  category: string;
  description: string;
}

function AddTask() {
  return (
    <div>
      <h2>Создание задачи</h2>
      <Formik
        initialValues={{
          name: '',
          category: '',
          description: '',
        }}
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
        <Form className="form">
          <label htmlFor="name" className="form__label">
            <Field
              id="name"
              name="name"
              placeholder="Введите имя задачи"
              className="form__input "
            />
            <span className="form__label-title">Название</span>
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
            />
            <span className="form__label-title">Категория</span>
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
            <span className="form__label-title">Описание</span>
          </label>

          <button className="button form__submit-btn" type="submit">
            Создать
          </button>
          <button className="button form__close-btn">Закрыть</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddTask;
