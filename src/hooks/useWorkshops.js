import { useState, useEffect } from 'react';
import { db } from '../helpers/initFirebase';

const useWorkshops = (year = new Date().getFullYear()) => {
  const [workshops, setWorkshops] = useState({ workshops: [], isEmpty: false, isLoaded: false });

  useEffect(() => {
    db.collection('event')
      .doc('workshops')
      .collection(`${year}`).get()
      .then(async (snapshot) => {
        const data = await Promise.all(snapshot.docs
          .map((doc) => doc.data())
          .map(async (workshop) => ({
            ...workshop,
            speaker: (await db.collection('speakers').doc(workshop.speaker).get())?.data(),
          })));

        setWorkshops({
          workshops: data,
          isEmpty: snapshot.empty,
          isLoaded: true,
        });
      });
  }, [year]);

  return workshops;
};

export default useWorkshops;
