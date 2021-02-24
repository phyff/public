import PropTypes from 'prop-types';
import speaker from './speaker';

export default PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.number,
  endTime: PropTypes.number,
  allDay: PropTypes.bool,
  speaker,
});
