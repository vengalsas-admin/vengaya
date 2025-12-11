'use client';
import styles from './SecondaryNav.module.css';
import { usePathname } from 'next/navigation';
import { isActivePath } from '@/libs/menu.utils';
import { MenuItem } from '@/interfaces/menuItem';
import { MdArrowBackIosNew } from 'react-icons/md';
import SmartLink from '@/components/smartLink/SmartLink';

interface Props {
  item: MenuItem;
}

export default function MenuItems({ item }: Props) {
  const pathname = usePathname();
  const active = isActivePath(pathname, item.href);

  return (
    <li className={`${styles.item} ${active ? styles.active : ''}`}>
      <SmartLink
        href={item.href}
        className={styles.link}
        aria-current={pathname === item.href ? 'page' : undefined}
        title={item.label}
      >
        {item.label}
      </SmartLink>

      {item.children && (
        <ul className={styles.dropdown}>
          {item.children.map((child) => {
            const childActive = isActivePath(pathname, child.href);
            return (
              <li key={child.href}>
                <SmartLink
                  href={child.href}
                  className={`${styles.link} ${childActive ? styles.active : ''}`}
                  aria-current={pathname === child.href ? 'page' : undefined}
                  title={child.label}
                >
                  {child.label}
                </SmartLink>
              </li>
            );
          })}
        </ul>
      )}

      {item.children && <MdArrowBackIosNew className={styles.arrow} />}
    </li>
  );
}
