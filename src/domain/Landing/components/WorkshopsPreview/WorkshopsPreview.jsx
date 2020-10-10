import React from 'react';
import seq from '../../../../assets/img/team/sequoyahsudler.png';
import robert from '../../../../assets/img/team/robertmay.png';
import Speakers from './components/Speakers';
import Topics from './components/Topics';
import Svg from '../../../../components/Svg';
import divider from '../../../../assets/img/dividers/divider-5.svg';

const WorkshopsPreview = () => {
  const workshops = [
    {
      title: 'Style & Substance - documentary',
      speaker: {
        name: 'Gage Johnston',
        image: seq,
      },
    },
    {
      title: 'Scene Analysis 101',
      speaker: {
        name: 'Jacob Mazer',
        image: robert,
        contact: '@jacobmazer',
      },
    },
  ];

  return (
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
};

export default WorkshopsPreview;
