import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';

const Phonebook = ({ name, number, onChange, onSubmit }) => {
  const initialValue = {
    name: '',
  };
  return (
    <>
      <Formik initialValues={initialValue} onSubmit={onSubmit}>
        <Form>
          <label>
            Name{' '}
            <Field
              autoComplete="off"
              onChange={onChange}
              name="name"
              value={name}
            />
          </label>
          <label>
            Number{' '}
            <Field
              autoComplete="off"
              onChange={onChange}
              name="number"
              value={number}
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};

export default Phonebook;

Phonebook.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
