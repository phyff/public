import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import PropTypes from 'prop-types';
import categories from '../../../../data/categories';
import useWinners from '../../../../hooks/useWinners';
import WinnersCategorySection from './WinnersCategorySection';

const WinnersYearPage = ({ year, compact }) => {
  const winners = useWinners(year);

  if (compact) {
    return (
      <Tabs defaultActiveKey={categories[0].title} variant="pills" className="mb-3 justify-content-end">
        {categories.map((category) => (
          <Tab eventKey={category.title} title={category.title} key={category.title}>
            <WinnersCategorySection
              category={category}
              winners={winners[category.title] ?? []}
            />
          </Tab>
        ))}
      </Tabs>
    );
  }

  return (
    <div>
      {categories.map((category) => (
        <WinnersCategorySection
          category={category}
          winners={winners[category.title] ?? []}
          key={category.title}
        />
      ))}
    </div>
  );
};

WinnersYearPage.propTypes = {
  year: PropTypes.number,
  compact: PropTypes.bool,
};

export default WinnersYearPage;
