import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Speakers from './components/Speakers';
import Topics from './components/Topics';
import Svg from '../../../../components/Svg';
import divider from '../../../../assets/img/dividers/divider-5.svg';
import NoWorkshops from '../../../Attend/components/Schedule/NoWorkshops';
import useWorkshops from '../../../../hooks/useWorkshops';

const WorkshopsPreview = () => {
  const workshops = useWorkshops();

  if (workshops.length > 0) {
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
  }

  return (
    <section className="has-divider">
      <Container>
        <Row>
          <Col>
            <NoWorkshops />
          </Col>
        </Row>
      </Container>
      <div className="divider">
        <Svg className="bg-primary" src={divider} alt="divider graphic" />
      </div>
    </section>
  );
};

export default WorkshopsPreview;
