'use client';
import styles from './Carousel.module.css';
import Slide from './Slide';
import { slides } from '@/configs/slides';
import Container from '../container/Container';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import CircleButton from '@/components/circleButton/CircleButton';
import { useCarousel } from '@/hooks/useCarousel';

export default function Carousel() {
  const { current, goToSlide } = useCarousel(slides.length);

  return (
    <section className={styles.carousel}>
      <Container as="div" className={styles.carouselInner}>
        <CircleButton
          className={styles.circle}
          onClick={() => goToSlide('prev')}
          ariaLabel="Slide anterior"
        >
          <MdArrowBackIosNew className={styles.side} />
        </CircleButton>

        <div className={styles.slideWrapper}>
          <Slide {...slides[current]} index={current} />
        </div>

        <CircleButton
          className={styles.circle}
          onClick={() => goToSlide('next')}
          ariaLabel="Siguiente slide"
        >
          <MdArrowForwardIos className={styles.side} />
        </CircleButton>
      </Container>
    </section>
  );
}
