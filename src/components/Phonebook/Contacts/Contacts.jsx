import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

const Contacts = ({ contacts, filter, onFilterChange }) => {
  const initialValues = { filter: '' };
  return (
    <>
      <Formik initialValues={initialValues}>
        <Form>
          <label>
            Find contacts by name <Field onChange={onFilterChange} value={filter} autoComplete="off" name="filter" />
          </label>
        </Form>
      </Formik>
      <ul>
        {contacts.map(({ name, id, number }) => {
          return (
            <li key={id}>
              {name}: {number}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Contacts;

Contacts.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
