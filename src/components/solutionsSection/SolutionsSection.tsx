import Container from '../container/Container';
import styles from './SolutionsSection.module.css';
import SolutionsTextContent from './SolutionsTextContent';
import SolutionsCollage from './SolutionsCollage';

export default function SolutionsSection() {
  return (
    <div className={styles.PrimaryWrapper}>
      <Container as="section" className={styles.section}>
        <div className={styles.wrapper}>
          <SolutionsTextContent />
          <SolutionsCollage />
        </div>
      </Container>
    </div>
  );
}
