import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      {title && <h1>{title}</h1>}
      {children}
    </>
  );
};

export default Section;

Section.prototypes = {
  title: PropTypes.string,
};
