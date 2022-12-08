import React from 'react';
import attend from '../assets/img/content/phyff-poster-2-bw.png';

const attendHeader = {
  title: 'Attend',
  image: attend,
  color: 'bg-primary',
  dividerColor: 'bg-primary-3',
  caption: () => (
    <div>
      Join us for the fifth annual Philadelphia Youth Film Festival!
      <br /><br />
      <strong>- FILMS!  </strong> - You'll receive a link the week prior to the festival that will enable you to screen the entire collection of this year's selected films.
      <br /><br />
      <strong>- KEYNOTE SPEAKER! </strong>- You'll receive the link to the webinar to join us for our keynote presentation with actor AMANDA PEET!
      <br /><br />
      <strong>- FILMMAKER TALKBACK SESSION! </strong>- You'll receive the link to join us for a virtual Q&A with some of our finalists.
      <br /><br />
      This free event is open to all high school students.
      The Festival is hosted by Germantown Friends School and will take place on Saturday, February 25, 2023.
      We will contact you closer to the event with a confirmation of exact start times and links to the webinar,
      zoom and any additional information and updates on ways that you can participate in the event!
    </div>
  ),
  decorationStyle: 1,
  decoColors: {
    primary: 'bg-primary-alt',
    secondary: 'bg-primary',
  },
};

export default attendHeader;
