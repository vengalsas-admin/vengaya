import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';
import quoteMark from '@/assets/quoteMark.svg';
import { FaRegPlayCircle, FaRegStopCircle, FaRegStar, FaStar } from 'react-icons/fa';

interface Props {
  name: string;
  message: string;
  rating: number;
  photo: string;
  audioSrc: string;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

export default function TestimonialCard({
  name,
  message,
  rating,
  photo,
  audioSrc,
  audioRef,
}: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Cuando el audio termina, quitamos el estado
  const handleEnded = () => setIsPlaying(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  }, [name, message, audioSrc]); // Puedes usar solo `audioSrc` si quieres simplificar

  return (
    <>
      <audio ref={audioRef} src={audioSrc} onEnded={handleEnded} preload="none" />

      <div className={styles.card}>
        <div className={styles.quoteMarkContainer}>
          <Image
            src={quoteMark}
            alt="Comillas decorativas"
            className={styles.quoteMark}
            width={600}
            height={600}
            loading="lazy"
            draggable={false}
          />
          <button
            className={styles.playButton}
            type="button"
            onClick={toggleAudio}
            aria-label={isPlaying ? 'Detener audio' : 'Reproducir audio'}
          >
            {isPlaying ? <FaRegStopCircle /> : <FaRegPlayCircle />}
          </button>
        </div>

        <div className={styles.messageContainer}>
          <p className={styles.message}>{message}</p>
        </div>

        <div className={styles.meta}>
          <Image
            src={photo}
            alt={name}
            width={40}
            height={40}
            className={styles.avatar}
            loading="lazy"
            draggable={false}
          />
          <span className={styles.name}>{name}</span>
          <span className={styles.stars}>
            {Array.from({ length: 5 }, (_, i) =>
              i < rating ? <FaStar key={i} className={styles.activeStars} /> : <FaRegStar key={i} />
            )}
          </span>
        </div>
      </div>
    </>
  );
}
