import styles from './CircleButton.module.css';
import { ReactNode } from 'react';

interface Props {
  onClick: () => void;
  ariaLabel: string;
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function CircleButton({
  onClick,
  ariaLabel,
  children,
  type = 'button',
  className,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${styles.circleButton} ${className ?? ''}`}
    >
      {children}
    </button>
  );
}
