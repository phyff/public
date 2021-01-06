import React from 'react';
import { Container } from 'react-bootstrap';
import useWinnerYears from '../../../../hooks/useWinnerYears';
import WinnersYearPage from '../../../Winners/WinnersViewer/components/WinnersYearPage';
import Loading from '../../../../components/Loading';
import Svg from '../../../../components/Svg';
import divider from '../../../../assets/img/dividers/divider-3.svg';

const LastYearWinners = () => {
  const winnerYears = useWinnerYears() ?? [];

  if (winnerYears.length > 0) {
    const year = Math.max(...winnerYears);

    return (
      <section className="has-divider bg-primary-alt">
        <Container>
          <div className="justify-content-center">
            <h1 className="mb-2">Last Year's Winners</h1>
            <WinnersYearPage year={year} compact navLeft />
          </div>
        </Container>
        <div className="divider flip-x">
          <Svg className="bg-primary" src={divider} alt="divider graphic" />
        </div>
      </section>
    );
  }

  return (
    <section className="has-divider bg-primary-alt">
      <Container>
        <div className="h-100 w-100 p-0 m-0 border-0 justify-content-center">
          <Loading className="ml-auto mr-auto" />
        </div>
      </Container>
      <div className="divider flip-x">
        <Svg className="bg-primary" src={divider} alt="divider graphic" />
      </div>
    </section>
  );
};

export default LastYearWinners;
