'use client';
import { usePathname } from 'next/navigation';
import styles from './PrimaryNav.module.css';
import NavItem from './NavItem';
import { navItems } from '@/configs/principalNav';
import Link from 'next/link';

export default function NavItemList() {
  const pathname = usePathname();

  const getActiveItem = (href: string): boolean => {
    if (href === '/') {
      const isOtherMatch = navItems.some(
        (item) =>
          item.href !== '/' && (pathname === item.href || pathname.startsWith(item.href + '/'))
      );
      return !isOtherMatch;
    }

    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <>
      <ul className={styles.list}>
        {navItems.map(({ href, label, subLabel }) => (
          <NavItem
            key={href}
            href={href}
            label={label}
            subLabel={subLabel}
            isActive={getActiveItem(href)}
          />
        ))}
      </ul>
      <ul className={styles.list}>
        <li className={`${styles.item} `}>
          <Link href={'https://checkout.wompi.co/l/bGIJ90'} target="_blank">
            <span className={styles.label}>Pagos PSE</span>
          </Link>
        </li>
      </ul>
    </>
  );
}
