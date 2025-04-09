import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
  name: string;
  category: string;
  description: string;
}

function AddTask() {
  return (
    <div>
      <h1>Создание задачи</h1>
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
            Имя
            <Field id="name" name="name" className="form__input " />
          </label>

          <label
            htmlFor="category"
            className="form__label form__label-category"
          >
            Категория
            <Field
              as="select"
              id="category"
              name="category"
              className="form__input"
            />
          </label>

          <label
            htmlFor="description"
            className="form__label form__label-description"
          >
            Описание
            <Field
              as="textarea"
              id="description"
              name="description"
              type="textarea"
              className="form__input"
            />
          </label>

          <button type="submit">Создать</button>
          <button type="submit">Закрыть</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddTask;
