import PropTypes from 'prop-types';

export default PropTypes.shape({
  name: PropTypes.string,
  photoURL: PropTypes.string,
  biography: PropTypes.string,
  title: PropTypes.string,
  order: PropTypes.number,
});
