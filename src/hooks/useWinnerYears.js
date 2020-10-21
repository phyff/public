import { useState, useEffect } from 'react';
import { db } from '../helpers/initFirebase';

const useWinnerYears = () => {
  const [winnerYears, setWinnerYears] = useState([]);

  useEffect(() => {
    db.collection('winners')
      .get()
      .then((snapshot) => {
        const years = [];
        snapshot.forEach((doc) => {
          years.push(doc.data());
        });

        setWinnerYears(years.reverse().map((data) => data.year));
      });
  }, []);

  return winnerYears;
};

export default useWinnerYears;
