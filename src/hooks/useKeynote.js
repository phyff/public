import { useState, useEffect } from 'react';
import { db } from '../helpers/initFirebase';

const useKeynote = (year) => {
  const [info, setInfo] = useState({
    isLoaded: false,
  });

  useEffect(() => {
    db.collection('event')
      .doc('keynote').get()
      .then(async (doc) => {
        if (doc.exists) {
          const keynoteId = doc.data()[year];
          setInfo({
            keynote: (await db.collection('speakers').doc(keynoteId).get())?.data(),
            isLoaded: true,
          });
        }
      });
  }, [year]);

  return info;
};

export default useKeynote;
