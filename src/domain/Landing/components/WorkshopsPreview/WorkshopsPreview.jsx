import React from 'react';
import seq from '../../../../assets/img/team/sequoyahsudler.png';
import robert from '../../../../assets/img/team/robertmay.png';
import Speakers from './components/Speakers';
import Topics from './components/Topics';
import Svg from '../../../../components/Svg';
import divider from '../../../../assets/img/dividers/divider-5.svg';
import workshops from '../../../../data/workshops';

const WorkshopsPreview = () => (
  <>
    <section>
      <Speakers workshops={workshops} />
    </section>
    <section className="has-divider">
      <Topics workshops={workshops} count={4} />
      <div className="divider">
        <Svg className="bg-primary" src={divider} alt="divider graphic" />
      </div>
    </section>
  </>
);

export default WorkshopsPreview;
