import moment from 'moment';
import submit from '../assets/img/content/submit.jpg';

const submitHeader = (submissionDeadline) => ({
  title: 'Submit',
  image: submit,
  color: 'bg-primary-2',
  caption: (submissionDeadline < Date.now()
    ? 'Submissions are now closed.'
    : `Submissions close on ${moment(submissionDeadline).format('dddd, MMMM Do YYYY')}`
  ),
  decoColors: {
    blob: 'bg-primary',
    dots: 'bg-primary-2',
  },
});

export default submitHeader;
