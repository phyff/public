import React from 'react';
import { Container } from 'react-bootstrap';
import useEventInfo from '../../../../hooks/useEventInfo';
import Loading from '../../../../components/Loading';
import Svg from '../../../../components/Svg';
import divider from '../../../../assets/img/dividers/divider-3.svg';
import useKeynote from '../../../../hooks/useKeynote';
import KeynoteSpeaker from './KeynoteSpeaker';

const Keynote = () => {
  const { date } = useEventInfo() ?? {};
  const currentYear = date?.toDate().getFullYear();

  return (
    <section className="has-divider bg-primary-2-alt">
      <Container>
        <div className="h-100 w-100 p-0 m-0 border-0 justify-content-center">
          <KeynoteSpeaker year={currentYear} />
        </div>
      </Container>
      <div className="divider flip-x">
        <Svg className="bg-white" src={divider} alt="divider graphic" />
      </div>
    </section>
  );
};

export default Keynote;
