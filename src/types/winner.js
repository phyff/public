import PropTypes from 'prop-types';

export default PropTypes.shape({
  title: PropTypes.string,
  director: PropTypes.string,
  url: PropTypes.string,
  local: PropTypes.bool,
  place: PropTypes.number,
  specialAward: PropTypes.string,
});
