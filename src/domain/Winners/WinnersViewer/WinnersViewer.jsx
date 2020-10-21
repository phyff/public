import React, { useEffect, useState } from 'react';
import { Container, Pagination } from 'react-bootstrap';
import useWinnerYears from '../../../hooks/useWinnerYears';
import WinnersYearPage from './components/WinnersYearPage';

const WinnersViewer = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const years = useWinnerYears() ?? [];
  // const years = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

  const getPaginationItem = (year, index) => (
    <Pagination.Item
      onClick={() => {
        setPageIndex(index);
      }}
      active={index === pageIndex}
      key={year}
    >{year}
    </Pagination.Item>
  );

  return (
    <section>
      <Container>
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
          {years.length > 5
            ? years.slice(pageIndex, pageIndex + 5).map(getPaginationItem)
            : years.map(getPaginationItem)}
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
    </section>
  );
};

export default WinnersViewer;
