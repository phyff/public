import { useState, useEffect } from 'react';
import { db } from '../helpers/initFirebase';

const usePassword = () => {
  const [password, setPassword] = useState(null);

  useEffect(() => {
    db.collection('security').doc('auth').get()
      .then(async (doc) => {
        if (doc.exists) {
          setPassword(doc.data().password);
        }
      });
  }, []);

  return password;
};

export default usePassword;
