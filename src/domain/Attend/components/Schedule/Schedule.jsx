import React from 'react';
import PropTypes from 'prop-types';
import ScheduleTable from './ScheduleTable';
import useWorkshops from '../../../../hooks/useWorkshops';
import NoWorkshops from './NoWorkshops';
import Loading from '../../../../components/Loading';
import useSchedule from '../../../../hooks/useSchedule';

const Schedule = ({ year }) => {
  const {
    workshops, workshopsConfirmed, timesConfirmed, isLoaded,
  } = useWorkshops(year);

  const {
    schedule, scheduleConfirmed, scheduleIsLoaded,
  } = useSchedule(year);

  const displayIfEmpty = isLoaded && scheduleIsLoaded
    ? <NoWorkshops />
    : (
      <div className="min-vh-70 h-100 w-100 p-0 m-0 border-0 card card-body justify-content-center">
        <Loading className="ml-auto mr-auto" />
      </div>
    );

  return (
    <div className="card card-body layer-2">
      {(workshops.length > 0 && workshopsConfirmed)
        ? (
          <ScheduleTable
            entries={workshops.concat(scheduleConfirmed && schedule)}
            displayTime={timesConfirmed}
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
