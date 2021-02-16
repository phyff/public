import { useState, useEffect } from 'react';
import { db } from '../helpers/initFirebase';
import useEventInfo from './useEventInfo';

const useWorkshops = (year) => {
  // Get current event's year
  const { date } = useEventInfo();
  const currentYear = date?.toDate().getFullYear();

  // Declare workshops state
  const [workshops, setWorkshops] = useState({ workshops: [], isEmpty: false, isLoaded: false });

  useEffect(() => {
    db.collection('event')
      .doc('workshops')
      .collection(`${year ?? currentYear}`).get()
      .then(async (snapshot) => {
        const data = await Promise.all(snapshot.docs
          .map((doc) => doc.data())
          .map((workshop) => ({
            ...workshop,
            time: workshop.time?.toDate().getTime(),
            endTime: workshop.endTime?.toDate().getTime(),
          }))
          .map(async (workshop) => ({
            ...workshop,
            speaker: (await db.collection('speakers').doc(workshop.speaker).get())?.data(),
          })));

        const workshopsDoc = (await db.collection('event').doc('workshops').get())?.data();

        setWorkshops({
          ...workshopsDoc,
          workshops: data,
          isEmpty: snapshot.empty,
          isLoaded: true,
        });
      });
  }, [year, currentYear]);
  return workshops;
};

export default useWorkshops;
