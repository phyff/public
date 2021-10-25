import { useState, useEffect } from 'react';
import { db } from '../helpers/initFirebase';

const useEventInfo = () => {
  const [info, setInfo] = useState({
    isLoaded: false,
  });

  useEffect(() => {
    db.collection('event')
      .doc('info').get()
      .then((doc) => {
        console.log(doc.data());
        if (doc.exists) {
          setInfo({
            ...doc.data(),
            isLoaded: true,
          });
        }
      });
  }, []);

  return info;
};

export default useEventInfo;
