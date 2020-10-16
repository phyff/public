import { useState, useEffect } from 'react';
import { db } from '../helpers/initFirebase';

const useWorkshops = () => {
  const [workshops, setWorkshops] = useState({ workshops: [], isEmpty: false, isLoaded: false });

  useEffect(() => {
    db.collection('event')
      .doc('info')
      .collection('workshops').get()
      .then((snapshot) => {
        setWorkshops({
          workshops: snapshot.docs.map(
            (doc) => doc.data(),
          ),
          isEmpty: snapshot.empty,
          isLoaded: true,
        });
      });
  }, []);

  return workshops;
};

export default useWorkshops;
