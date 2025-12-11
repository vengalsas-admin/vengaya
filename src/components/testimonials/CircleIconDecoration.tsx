import Image from 'next/image';
import circleIcon from '@/assets/circle.svg';
import styles from './Testimonials.module.css';

export default function CircleIconDecoration() {
  return (
    <Image
      className={styles.circleIcon}
      alt="Decoración circular"
      src={circleIcon}
      width={1000}
      height={1000}
    />
  );
}
