import Buttons from '../buttons/Buttons';
import styles from './SolutionsSection.module.css';

export default function SolutionsTextContent() {
  return (
    <div className={styles.textContent}>
      <h2>
        CONOCE NUESTRAS <span>SOLUCIONES</span> FINANCIERAS
      </h2>
      <h3>Descubre opciones pensadas para ayudarte a alcanzar tus metas.</h3>
      <p>
        En VengaYa te ofrecemos alternativas de crédito adaptadas a tus necesidades. Ya sea que
        busques consolidar tus deudas, financiar un proyecto personal o contar con liquidez
        inmediata, tenemos la opción ideal para ti. Consulta nuestros planes y elige el que mejor se
        ajuste a tu capacidad de pago.
      </p>
      <Buttons
        btnPrimaryLabel="Simular Crédito"
        btnSecondaryLabel="Explorar Opciones"
        hrefURI1="/simulador"
        hrefURI2="/opciones"
      />
    </div>
  );
}
