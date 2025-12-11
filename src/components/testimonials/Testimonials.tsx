// src/components/testimonials/Testimonials.tsx
'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './Testimonials.module.css';
import Container from '../container/Container';
import TestimonialCard from './TestimonialCard';
import CircleIconDecoration from './CircleIconDecoration';
import PaginationDots from './PaginationDots';
import TestimonialsIntro from './TestimonialsIntro';
import { testimonials } from '@/configs/testimonials';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleChange = (direction: 'prev' | 'next') => {
    stopAudio();
    setIndex((prev) =>
      direction === 'prev'
        ? (prev - 1 + testimonials.length) % testimonials.length
        : (prev + 1) % testimonials.length
    );
  };

  // Auto-advance every 5 seconds (only when audio is not playing)
  useEffect(() => {
    const tick = () => {
      if (!audioRef.current || audioRef.current.paused) {
        setIndex((prev) => (prev + 1) % testimonials.length);
      }
    };

    intervalRef.current = setInterval(tick, 10000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className={styles.testimonials}>
      <Container className={styles.inner}>
        <TestimonialsIntro
          onPrev={() => handleChange('prev')}
          onNext={() => handleChange('next')}
        />

        <div className={styles.TestimonialsWrapper}>
          <CircleIconDecoration />

          <TestimonialCard {...testimonials[index]} audioRef={audioRef} />

          <PaginationDots activeIndex={index} total={testimonials.length} />
        </div>
      </Container>
    </section>
  );
}
