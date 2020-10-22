import React, { useState, useEffect } from 'react';
import { Container, Pagination } from 'react-bootstrap';
import useWinnerYears from '../../../hooks/useWinnerYears';
import WinnersYearPage from './components/WinnersYearPage';
import Svg from '../../../components/Svg';
import dots3 from '../../../assets/img/decorations/deco-dots-1.svg';
import useQuery from '../../../helpers/useQuery';

const WinnersViewer = () => {
  const query = useQuery();
  const [pageIndex, setPageIndex] = useState(0);

  const years = useWinnerYears() ?? [];
  // const years = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

  const pagesVisible = 5;

  const getPaginationItem = (year, index) => {
    const offsetAmount = ((pagesVisible - 1) / 2);
    const leftRealOffset = pageIndex - offsetAmount;
    const rightRealOffset = pageIndex + offsetAmount;

    const leftOffset = leftRealOffset - (
      rightRealOffset > (years.length - 1) ? rightRealOffset - (years.length - 1) : 0
    );

    const rightOffset = rightRealOffset - (
      leftRealOffset < 0 ? leftRealOffset : 0
    );

    if (leftOffset < index && index < rightOffset) {
      return (
        <Pagination.Item
          onClick={() => {
            setPageIndex(index);
          }}
          active={index === pageIndex}
          key={year}
        >{year}
        </Pagination.Item>
      );
    }

    if (index === leftOffset || index === rightOffset) {
      return (
        <Pagination.Ellipsis key={year} />
      );
    }
    return null;
  };

  useEffect(() => {
    const year = query.get('year');
    const index = Math.max(Math.min(years.map((y) => y.toString()).indexOf(year), years.length), 0);
    setPageIndex(index);
  }, [years]);

  return (
    <section className="bg-primary-alt">
      <Container className="layer-2">
        <Pagination className="justify-content-end">
          <Pagination.First
            onClick={() => {
              setPageIndex(0);
            }}
          />
          <Pagination.Prev
            onClick={() => {
              setPageIndex((index) => Math.max(
                Math.min(years.length - 1, index - 1),
                0,
              ));
            }}
          />
          {years.map(getPaginationItem)}
          <Pagination.Next
            onClick={() => {
              setPageIndex((index) => Math.max(
                Math.min(years.length - 1, index + 1),
                0,
              ));
            }}
          />
          <Pagination.Last
            onClick={() => {
              setPageIndex(years.length - 1);
            }}
          />
        </Pagination>
        {years[pageIndex] && <WinnersYearPage year={years[pageIndex]} compact />}
      </Container>
      <div className="decoration bottom left scale-2 d-none d-md-block">
        <Svg
          className="bg-primary"
          src={dots3}
          alt="deco-dots-3 decoration"
        />
      </div>
    </section>
  );
};

export default WinnersViewer;
