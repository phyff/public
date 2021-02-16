import PropTypes from 'prop-types';

export default PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.number,
  endTime: PropTypes.number,
  allDay: PropTypes.bool,
  speaker: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    contact: PropTypes.string,
    affiliation: PropTypes.string,
  }),
});
