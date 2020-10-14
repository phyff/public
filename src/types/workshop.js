import PropTypes from 'prop-types';

export default PropTypes.shape({
  title: PropTypes.string,
  time: PropTypes.number,
  speaker: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    contact: PropTypes.string,
  }),
});