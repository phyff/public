import useAnnualEventInfo from './useAnnualEventInfo';

const useWorkshops = (year) => useAnnualEventInfo(year, 'workshops');

export default useWorkshops;
