import React from 'react';
import PropTypes from 'prop-types';
import WinnersTable from './WinnersTable';
import winnerType from '../../../../types/winner';
import categoryType from '../../../../types/category';
import Svg from '../../../../components/Svg';

const WinnersCategorySection = ({ category, winners }) => {
  const { title, description, icon } = category;

  return (
    <div className="mb-3">
      <div className="justify-content-center text-center mb-1">
        <Svg src={icon} className="icon icon-lg bg-primary" externalClassnames="d-inline-block" />
        <h3>{title}</h3>
        <p className="lead">{description}</p>
      </div>
      <WinnersTable winners={winners} />
    </div>
  );
};

WinnersCategorySection.propTypes = {
  category: categoryType,
  winners: PropTypes.arrayOf(winnerType),
};

export default WinnersCategorySection;
