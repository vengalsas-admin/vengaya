import MenuItems from './MenuItems';
import styles from './SecondaryNav.module.css';

import type { MenuItem } from '@/interfaces/menuItem';

interface Props {
  items: MenuItem[];
}

export default function MenuList({ items }: Props) {
  return (
    <ul className={styles.menu}>
      {items.map((item) => (
        <MenuItems key={item.href} item={item} />
      ))}
    </ul>
  );
}
