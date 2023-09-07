import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';

const Phonebook = ({ value, onChange, onSubmit }) => {
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
              value={value}
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
