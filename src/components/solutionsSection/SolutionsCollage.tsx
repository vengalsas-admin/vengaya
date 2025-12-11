import Image from 'next/image';
import styles from './SolutionsSection.module.css';

const collageImages = [
  { src: '/images/img1.png', alt: 'Mujer con idea', className: styles.img1 },
  { src: '/images/img2.png', alt: 'Bombillo en mano', className: styles.img2 },
  { src: '/images/img3.png', alt: 'Atardecer', className: styles.img3 },
  { src: '/images/img4.png', alt: 'Reunión creativa', className: styles.img4 },
  { src: '/images/img5.png', alt: 'Negociación', className: styles.img5 },
  { src: '/images/img6.png', alt: 'Equipo diverso', className: styles.img6 },
  { src: '/images/img7.png', alt: 'Luz cálida', className: styles.img7 },
  { src: '/images/img8.png', alt: 'Ideas creativas', className: styles.img8 },
];

export default function SolutionsCollage() {
  return (
    <div className={styles.collage}>
      {collageImages.map(({ src, alt, className }) => (
        <Image
          key={src}
          width={1000}
          height={1000}
          src={src}
          alt={alt}
          className={className}
          loading="lazy"
          draggable={false}
        />
      ))}
    </div>
  );
}
