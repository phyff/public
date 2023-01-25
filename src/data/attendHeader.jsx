import React from 'react';
import attend from '../assets/img/content/phyff-poster-2-bw.png';

const attendHeader = {
  title: 'Attend',
  image: attend,
  color: 'bg-primary',
  dividerColor: 'bg-primary-3',
  caption: () => (
    <div>
      Join us for the sixth annual Philadelphia Youth Film Festival, hosted on Saturday, February 25, 2023 from 11am to 6pm EST.
      We're pleased to announce that Matt Grady will be serving as this year's keynote speaker. Mr. Grady is a producer, actor, and editor from New York City, as well as the founder of Factory 25, an independent film distribution company housing conceptually provocative narratives and documentaries. His mission is to expose the world to under-the-radar films, music, and other curiosities theatrically and digitally. In 2014, Mr. Grady was named "One of the Most Influential People in Brooklyn Culture” and has been called "one of the most important curatorial voices of new, independent American films." We are excited to have him speak at our festival!

      <strong>FILMS!</strong> - You'll receive a link the week prior to the festival that will enable you to screen the entire collection of this year's selected films. In addition, winning films will be screened in person at our event in Philadelphia on February 25.
      <br /><br />
      <strong>KEYNOTE SPEAKER</strong> - Join us for our keynote presentation with producer, actor, and editor MATT GRADY.
      <br /><br />
      <strong>STUDENT FILMMAKER PANEL</strong> - Join us for a Q&A session with some of our finalists from around the world. If you cannot join us in person, you’ll receive a link to join the panel virtually.
      <br /><br />
      <strong>WORKSHOPS</strong> - Participate in workshops with film industry professionals,covering a wide variety of general and niche filmmaking topics. Whether you want to learn about how films are made or are interested in making your own, we'd love to see you at our workshops.
      <br /><br />
      This free event is open to all high school students (Students must be between the ages of 14 and 19 and should currently be enrolled in high school, or have graduated from high school in 2022). The Festival is hosted by Germantown Friends School and will take place on Saturday, February 25, 2023. If you are unable to join us in person for the festival, we would still like to invite you to view the films online and participate virtually in the Student Filmmaker Panel on the day of the event.
    </div>
  ),
  decorationStyle: 1,
  decoColors: {
    primary: 'bg-primary-alt',
    secondary: 'bg-primary',
  },
};

export default attendHeader;
