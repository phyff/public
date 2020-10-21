import { useState, useEffect } from 'react';
import { db } from '../helpers/initFirebase';
import categories from '../data/categories';

const useWinners = (year) => {
  const [winners, setWinners] = useState({});

  useEffect(() => {
    categories.forEach(({ title }) => {
      db.collection('winners')
        .doc(year.toString())
        .collection(title.toLowerCase())
        .get()
        .then((snapshot) => {
          const categoryWinners = [];
          snapshot.forEach((doc) => {
            categoryWinners.push(doc.data());
          });

          setWinners((current) => {
            const updatedWinners = {
              ...current,
            };
            updatedWinners[title] = categoryWinners;
            return updatedWinners;
          });
        });
    });
  }, [year]);

  return winners;
};

export default useWinners;
