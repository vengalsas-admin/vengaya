'use client';
import { useState } from 'react';
import styles from './NewsletterSignup.module.css';
import Container from '../container/Container';
import { toast } from 'react-hot-toast';
import { submitToClientify } from '@/configs/newsletterConfig/submitToClientify';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    if (!trimmedEmail) return;

    setSubmitting(true);

    try {
      await toast.promise(
        submitToClientify(trimmedEmail).then(() => setEmail('')),
        {
          loading: 'Enviando...',
          success: '¡Gracias por suscribirte!',
          error: 'Ocurrió un error. Intenta más tarde.',
        }
      );
    } catch (err) {
      console.error('Error capturado:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={styles.newsletterSection}>
      <Container as="div">
        <h2 className={styles.title}>SUSCRÍBETE A NUESTRO BOLETÍN</h2>
        <p className={styles.description}>
          Mantente informado con noticias, promociones y contenidos relevantes sobre nuestros
          servicios financieros.
        </p>

        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Correo electrónico"
          />

          <button
            type="submit"
            className={styles.button}
            disabled={submitting}
            aria-busy={submitting}
            aria-disabled={submitting}
          >
            {submitting ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </Container>
    </section>
  );
}
