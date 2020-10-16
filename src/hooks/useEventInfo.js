import { useState, useEffect } from 'react';
import { db } from '../helpers/initFirebase';

const useEventInfo = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    db.collection('event')
      .doc('info').get()
      .then((doc) => {
        if (doc.exists) setInfo(doc.data());
      });
  }, []);

  return info;
};

export default useEventInfo;
