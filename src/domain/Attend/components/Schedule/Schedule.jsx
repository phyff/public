import React from 'react';
import PropTypes from 'prop-types';
import ScheduleTable from './ScheduleTable';
import useWorkshops from '../../../../hooks/useWorkshops';
import NoWorkshops from './NoWorkshops';
import Loading from '../../../../components/Loading';

const Schedule = ({ year }) => {
  const { workshops, isLoaded } = useWorkshops(year);

  const displayIfEmpty = isLoaded
    ? <NoWorkshops />
    : (
      <div className="min-vh-70 h-100 w-100 p-0 m-0 border-0 card card-body justify-content-center">
        <Loading className="ml-auto mr-auto" />
      </div>
    );

  return (
    <div className="card card-body layer-2">
      {workshops.length > 0
        ? (
          <ScheduleTable
            workshops={workshops}
          />
        )
        : displayIfEmpty}
    </div>
  );
};

Schedule.propTypes = {
  year: PropTypes.number,
};

export default Schedule;
