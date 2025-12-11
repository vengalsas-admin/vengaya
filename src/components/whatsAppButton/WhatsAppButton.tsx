'use client';
import { useState, useEffect, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppButton.module.css';
import { LINK } from '@/configs/constants';

export default function WhatsAppButton() {
  const [isInactive, setIsInactive] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    setIsInactive(false);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setIsInactive(true), 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return (
    <a
      href={LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.button} ${isInactive ? styles.inactive : ''}`}
      onMouseEnter={resetTimer}
      onMouseMove={resetTimer}
    >
      <FaWhatsapp className={styles.icon} />
      <span className={styles.label}>Chatea con nosotros</span>
    </a>
  );
}
