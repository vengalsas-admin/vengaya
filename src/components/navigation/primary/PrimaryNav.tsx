import Container from '@/components/container/Container';
import styles from './PrimaryNav.module.css';
import NavItemList from './NavItemList';

export default function PrimaryNav() {
  return (
    <header className={styles.header}>
      <Container as="nav" className={styles.nav} aria-label="Navegación principal">
        <NavItemList />
      </Container>
    </header>
  );
}
