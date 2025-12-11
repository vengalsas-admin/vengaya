import Image from 'next/image';
import styles from './Carousel.module.css';
import { SlideImgProps } from '@/interfaces/slides';

export default function SlideImage({ image, alt }: SlideImgProps) {
  return (
    <div className={styles.imgContainer}>
      <Image
        src={image}
        alt={alt}
        width={1200}
        height={800}
        className={styles.image}
        draggable={false}
        loading="lazy"
      />
    </div>
  );
}
