import { useState, useEffect } from 'react';
import { db } from '../helpers/initFirebase';

const useSponsors = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    db.collection('sponsors').get()
      .then((snapshot) => {
        setSponsors(
          snapshot.docs.map(
            (doc) => doc.data(),
          ),
        );
      });
  }, []);

  return sponsors;
};

export default useSponsors;
