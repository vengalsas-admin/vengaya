import Container from '../container/Container';
import styles from './CardSection.module.css';
import { FaChartLine, FaGlobe, FaCalendarAlt, FaUserTie } from 'react-icons/fa';

export default function CardSection() {
  return (
    <Container as="section" className={styles.section}>
      <div className={styles.header}>
        <h1>
          ¿Por qué Elegir <span className={styles.highlight}>VengaYa</span>?
        </h1>
        <h2>Más que un crédito, tu aliado financiero</h2>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <FaChartLine />
          </div>
          <h3>Tasas competitivas</h3>
          <p>Accede a condiciones claras y justas, alineadas al mercado.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            <FaGlobe />
          </div>
          <h3>100 % en línea</h3>
          <p>Realiza todo el proceso sin salir de casa.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            <FaCalendarAlt />
          </div>
          <h3>Plazos flexibles</h3>
          <p>Elige el plazo que mejor se adapte a tu capacidad de pago.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            <FaUserTie />
          </div>
          <h3>Asesoría experta</h3>
          <p>Te acompañamos en cada etapa de tu solicitud.</p>
        </div>
      </div>
    </Container>
  );
}
