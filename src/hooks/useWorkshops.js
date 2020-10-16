import { useState, useEffect } from 'react';
import { db } from '../helpers/initFirebase';

const useWorkshops = () => {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    db.collection('event')
      .doc('info')
      .collection('workshops').get()
      .then((snapshot) => {
        setWorkshops(
          snapshot.docs.map(
            (doc) => doc.data(),
          ),
        );
      });
  }, []);

  return workshops;
};

export default useWorkshops;
