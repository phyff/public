import moment from 'moment';
import submit from '../assets/img/content/submit.jpg';

const submitHeader = (submissionDeadline) => ({
  title: 'Submit',
  image: submit,
  color: 'bg-primary-2',
  caption: submissionDeadline && (submissionDeadline < Date.now()
    ? 'Submissions are now closed.'
    : `Submissions close on ${moment(submissionDeadline).format('dddd, MMMM Do YYYY')}`
  ),
  decorationStyle: 1,
  decoColors: {
    primary: 'bg-primary',
    secondary: 'bg-primary-2',
  },
});

export default submitHeader;
