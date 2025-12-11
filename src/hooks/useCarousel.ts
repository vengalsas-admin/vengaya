import { useState, useEffect } from 'react';
import { AUTO_PLAY_INTERVAL } from '@/configs/constants';

export function useCarousel(total: number) {
  const [current, setCurrent] = useState(0);

  const goToSlide = (direction: 'prev' | 'next') => {
    setCurrent((prev) =>
      direction === 'prev' ? (prev === 0 ? total - 1 : prev - 1) : prev === total - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [total]);

  return { current, goToSlide };
}
