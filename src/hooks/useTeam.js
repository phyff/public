import { useState, useEffect } from 'react';
import { db } from '../helpers/initFirebase';

const useTeam = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    db.collection('team').get()
      .then((snapshot) => {
        setTeam(
          snapshot.docs.map(
            (doc) => doc.data(),
          ),
        );
      });
  }, []);

  return team;
};

export default useTeam;
