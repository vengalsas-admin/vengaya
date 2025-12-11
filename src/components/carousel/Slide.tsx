import { SlideProps } from '@/interfaces/slides';
import styles from './Carousel.module.css';
import SlideContent from './SlideContent';
import SlideImage from './SlideImage';

export default function Slide({
  title,
  subtitle,
  description,
  image,
  index,
  btnPrimaryLabel,
  btnSecondaryLabel,
  hrefURI1,
  hrefURI2,
}: SlideProps) {
  const isEven = index % 2 === 1;

  return (
    <div className={`${styles.slide} ${isEven ? styles.slideReverse : ''}`}>
      <SlideContent
        title={title}
        description={description}
        subtitle={subtitle}
        btnPrimaryLabel={btnPrimaryLabel}
        btnSecondaryLabel={btnSecondaryLabel}
        hrefURI1={hrefURI1}
        hrefURI2={hrefURI2}
      />
      <SlideImage image={image} alt={title} />
    </div>
  );
}
