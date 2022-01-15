import React from 'react';
import { Link } from 'react-router-dom';
import thomasInterview from '../../../assets/img/content/Eli-headshot.jpeg';

const Mission = () => (
  <section>
    <div className="container">
      <div className="row align-items-center justify-content-around">
        <div className="col-md-5 col-xl-6 mb-4 mb-md-0">
          <img src={thomasInterview} style={{ width: '70%' }} alt="Mission" className="rounded shadow-3d" />
        </div>
        <div className="col-md-7 col-xl-6">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-10">
              <span className="badge badge-primary">Founders Note</span>
              <div className="my-3">
                <span className="h1">Creating a community of filmmakers.</span>
              </div>
              <p className="lead">
                When I was in high school I loved filmmaking,
                but I was more of a cinematographer and an editor
                than a writer or a director. I wanted to meet
                people who inspired me and people I could work with.
                I found myself wishing that there was a place for people
                like me, for kids who loved film to meet each other and
                swap stories and ideas and learn about film. At the same
                time, I was looking for film festivals to show off some
                projects I was proud of, but I kept getting turned
                away by the prospect of competing with college
                students and professionals. That's when I brought
                my idea for the GFS Film Festival to the newly formed
                film club with Sarah, Noah, Hyunji, and Adina. I'm so
                happy to see what PHYFF has become in the years since I
                graduated, and I can't wait to watch new young filmmakers
                explore their passion in the brilliant PHYFF community!"
                - Eli Eisenstein, PHYFF Co-Founder.
              </p>
              <a href="https://thephiladelphiacitizen.org/philadelphia-youth-film-festival/" URL className="lead hover-arrow">See us in the news!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Mission;
