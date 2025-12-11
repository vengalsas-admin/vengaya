import styles from './Testimonials.module.css';
import CircleButton from '../circleButton/CircleButton';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export default function TestimonialsIntro({ onPrev, onNext }: Props) {
  return (
    <div className={styles.textBlock}>
      <h2 className={styles.title}>TESTIMONIOS</h2>
      <p className={styles.description}>
        Las voces de nuestros clientes son nuestra mejor carta de presentación. Compartimos sus
        testimonios para demostrar el valor y la confianza que respaldan nuestros servicios
        financieros.
      </p>
      <div className={styles.controls}>
        <CircleButton onClick={onPrev} ariaLabel="Anterior">
          <MdArrowBackIosNew className={styles.side} />
        </CircleButton>
        <CircleButton onClick={onNext} ariaLabel="Siguiente">
          <MdArrowForwardIos className={styles.side} />
        </CircleButton>
      </div>
    </div>
  );
}
