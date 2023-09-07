import PropTypes from 'prop-types';

const Section = ({ title }) => {
  return <>{title && <h1>{title}</h1>}</>;
};

export default Section;

Section.prototypes = {
  title: PropTypes.string,
};
