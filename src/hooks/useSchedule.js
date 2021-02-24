import useAnnualEventInfo from './useAnnualEventInfo';

const useSchedule = (year) => useAnnualEventInfo(year, 'schedule');

export default useSchedule;
