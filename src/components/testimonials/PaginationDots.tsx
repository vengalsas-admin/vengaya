import styles from './Testimonials.module.css';

interface Props {
  activeIndex: number;
  total: number;
}

export default function PaginationDots({ activeIndex, total }: Props) {
  return (
    <div className={styles.pagination}>
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={`${styles.dot} ${i === activeIndex ? styles.activeDot : ''}`}
          aria-label={`Testimonio ${i + 1}`}
        />
      ))}
    </div>
  );
}
