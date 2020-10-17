import PropTypes from 'prop-types';

export default PropTypes.shape({
  title: PropTypes.string.isRequired,
  caption: PropTypes.string,
  image: PropTypes.string,
  color: PropTypes.string,
  dividerColor: PropTypes.string,
  decorationStyle: PropTypes.number,
  decoColors: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
  }),
});
