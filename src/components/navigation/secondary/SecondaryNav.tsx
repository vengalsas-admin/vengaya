import Container from '@/components/container/Container';
import Image from 'next/image';
import MenuList from './MenuList';
import { mainMenu } from '@/configs/mainMenu';
import styles from './SecondaryNav.module.css';
import SmartLink from '@/components/smartLink/SmartLink';

export default function SecondaryNav() {
  return (
    <div className={styles.primaryWrapper}>
      <Container as="nav" className={styles.nav} aria-label="Menú de navegación secundaria">
        <SmartLink href="/" className={styles.logo}>
          <Image
            className={styles.logoImg}
            src="/logo.webp"
            alt="Logo VengaYa"
            width={220}
            height={74}
            priority
            draggable={false}
          />
        </SmartLink>

        <MenuList items={mainMenu} />
      </Container>
    </div>
  );
}
