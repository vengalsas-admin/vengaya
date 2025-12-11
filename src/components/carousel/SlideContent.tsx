import { SlideTextProps } from '@/interfaces/slides';
import styles from './Carousel.module.css';
import Buttons from '../buttons/Buttons';

export default function SlideContent({
  title,
  subtitle,
  description,
  btnPrimaryLabel,
  btnSecondaryLabel,
  hrefURI1,
  hrefURI2,
}: SlideTextProps) {
  return (
    <div className={styles.textContainer}>
      <div className={styles.textWrapper}>
        <h3 className={styles.subTitle}>{subtitle}</h3>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <Buttons
          btnPrimaryLabel={btnPrimaryLabel}
          btnSecondaryLabel={btnSecondaryLabel}
          hrefURI1={hrefURI1}
          hrefURI2={hrefURI2}
        />
      </div>
    </div>
  );
}
