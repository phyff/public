import { useEffect, useState } from 'react';
import throttle from '../helpers/throttle';

const useScrollPosition = ({ delay }) => {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = throttle(
      () => { setScrollPosition(window.scrollY); },
      delay ?? 10,
      () => window.scrollY <= 0,
    );

    window.addEventListener('scroll', handleScroll);

    return () => { window.removeEventListener('scroll', handleScroll); };
  });

  return scrollPosition;
};

export default useScrollPosition;
