import SmartLink from '@/components/smartLink/SmartLink';
import styles from './PrimaryNav.module.css';
import { NavItemProps } from '@/interfaces/navItemProps';

export default function NavItem({ href, label, subLabel, isActive }: NavItemProps) {
  return (
    <li className={`${styles.item} ${isActive ? styles.active : ''}`}>
      <SmartLink href={href} aria-current={isActive ? 'page' : undefined} className={styles.link}>
        <span className={styles.label}>{label}</span>
        {subLabel && <span className={styles.subLabel}>{subLabel}</span>}
      </SmartLink>
    </li>
  );
}
