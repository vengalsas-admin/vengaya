import styles from './StatsCard.module.css';
import AnimatedCounter from './AnimatedCounter';
import Container from '../container/Container';

export default function StatsCard() {
  return (
    <div className={styles.wrapper}>
      <Container as={'section'} className={styles.container}>
        <div className={styles.item}>
          <strong>
            <AnimatedCounter value={1276} prefix="+" />
          </strong>
          <span>CRÉDITOS APROBADOS</span>
        </div>

        <div className={styles.item}>
          <strong>
            <AnimatedCounter value={613} prefix="+" />
          </strong>
          <span>CLIENTES</span>
        </div>

        <div className={styles.item}>
          <strong>
            <AnimatedCounter value={4518} prefix="+$" suffix=" M" decimals={3} />
          </strong>
          <span>PESOS OTORGADOS</span>
        </div>
      </Container>
    </div>
  );
}
