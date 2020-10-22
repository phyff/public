import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import PropTypes from 'prop-types';
import categories from '../../../../data/categories';
import useWinners from '../../../../hooks/useWinners';
import WinnersCategorySection from './WinnersCategorySection';
import useQuery from '../../../../helpers/useQuery';

const WinnersYearPage = ({ year, compact }) => {
  const categoryTitles = categories.map((category) => category.title);
  const [activeKey, setActiveKey] = useState(categoryTitles[0]);
  const query = useQuery();
  const winners = useWinners(year);

  useEffect(() => {
    const category = query.get('category') ?? 'none';
    const categoryCapitalized = category.charAt(0).toUpperCase() + category.slice(1);
    if (category && categoryTitles.includes(categoryCapitalized)) setActiveKey(categoryCapitalized);
  }, []);

  if (compact) {
    return (
      <Tabs
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(k)}
        variant="pills"
        className="mb-3 justify-content-end"
      >
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
