import { useState, useEffect } from 'react';
import { db } from '../helpers/initFirebase';
import useEventInfo from './useEventInfo';

const useAnnualEventInfo = (year, path) => {
  // Get current event's year
  const { date } = useEventInfo();
  const currentYear = date?.toDate().getFullYear();

  // Declare workshops state
  const [annualEvents, setAnnualEvents] = useState({ [path]: [], isEmpty: false, isLoaded: false });

  useEffect(() => {
    db.collection('event')
      .doc(path)
      .collection(`${year ?? currentYear}`).get()
      .then(async (snapshot) => {
        const data = await Promise.all(snapshot.docs
          .map((doc) => doc.data())
          .map((event) => ({
            ...event,
            time: event.time?.toDate().getTime(),
            endTime: event.endTime?.toDate().getTime(),
          }))
          .map(async (event) => ({
            ...event,
            speaker: (event.speaker) && (await db.collection('speakers').doc(event.speaker).get())?.data(),
          })));

        const doc = (await db.collection('event').doc(path).get())?.data();

        setAnnualEvents({
          ...doc,
          [path]: data,
          isEmpty: snapshot.empty,
          isLoaded: true,
        });
      });
  }, [year, currentYear]);
  return annualEvents;
};

export default useAnnualEventInfo;
