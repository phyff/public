import React from 'react';
import saas2 from '../../../../assets/img/saas-2.svg';
import useWorkshops from '../../../../hooks/useWorkshops';
import Loading from '../../../../components/Loading';
import ScheduleTable from './ScheduleTable';
import useEventInfo from '../../../../hooks/useEventInfo';

const NoWorkshops = () => {
  const { date } = useEventInfo();
  const currentYear = date?.toDate().getFullYear();

  const { workshops, isLoaded } = useWorkshops(currentYear - 1);

  return (
    <div>
      <div className="row d-flex flex-column align-items-center justify-content-center mx-0">
        <img src={saas2} alt="No Workshops" style={{ width: '35%' }} className="mb-5" />
        <h3 className="h3">Workshops To Be Announced</h3>
        <p className="lead text-center mx-3">
          We're working hard to schedule and confirm workshops for this year's
          event. Check out last year's schedule:
        </p>
        {isLoaded ? (
          <div className="w-100 mx-0 border-0 p-0">
            <ScheduleTable entries={workshops} />
          </div>
        ) : (
          <div className="min-vh-70 h-100 w-100 p-0 m-0 border-0 card card-body justify-content-center">
            <Loading className="ml-auto mr-auto" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NoWorkshops;
