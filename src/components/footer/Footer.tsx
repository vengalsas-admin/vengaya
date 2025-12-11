import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Container from '../container/Container';
import styles from './Footer.module.css';
import Image from 'next/image';
import SmartLink from '../smartLink/SmartLink';
import Buttons from '../buttons/Buttons';

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <Container as="section" className={styles.noticeContent}>
        <div className={styles.noticeText}>
          <h3>Aviso legal</h3>
          <p>
            La información publicada en VengaYa tiene fines exclusivamente informativos y no
            representa una oferta comercial vinculante. Todos los productos financieros están
            sujetos al cumplimiento de requisitos específicos y a un proceso de evaluación
            individual. La aprobación y disponibilidad de los créditos no están garantizadas de
            manera inmediata. Para obtener información precisa y personalizada, se recomienda
            contactar directamente a nuestros asesores autorizados. Todo el contenido del sitio es
            propiedad de Vengal S.A.S. y se encuentra protegido por derechos de autor. El uso de
            este sitio implica la aceptación de sus{' '}
            <SmartLink href="/seguridad" className={styles.links}>
              términos y condiciones
            </SmartLink>
            , los cuales pueden ser modificados en cualquier momento sin previo aviso.
          </p>
        </div>
        <div className={styles.fraudAlert}>
          <Image
            src="/images/fraud.png"
            alt="Ilustración de Protección contra fraude"
            width={1000}
            height={1000}
            className={styles.fraudAlertImg}
            loading="lazy"
            draggable={false}
          />
          <div className={styles.fraudText}>
            <h4>Protégete del fraude</h4>
            <p>
              Conoce las señales más comunes de fraude, cómo actúan los estafadores y cómo
              identificar correctamente la comunicación oficial de VengaYa. Proteger tu información
              es una prioridad para nosotros.
            </p>
          </div>
          <div>
            <Buttons btnPrimaryLabel="Conoce más" hrefURI1="/" btnSecondaryLabel="" hrefURI2="" />
          </div>
        </div>
      </Container>

      {/* Footer principal */}
      <footer className={styles.footerMain}>
        <Container as="div" className={styles.footerContent}>
          <div className={styles.columns}>
            <div>
              <h5>Información institucional</h5>
              <ul>
                <li>
                  <SmartLink href="/">Quiénes somos</SmartLink>
                </li>
                <li>
                  <SmartLink href="/">Historia corporativa</SmartLink>
                </li>
                <li>
                  <SmartLink href="/">Misión y visión</SmartLink>
                </li>
                <li>
                  <SmartLink href="/">Equipo</SmartLink>
                </li>
                <li>
                  <SmartLink href="/">Compromiso con la seguridad</SmartLink>
                </li>
                <li>
                  <SmartLink href="/">Oportunidades laborales</SmartLink>
                </li>
              </ul>
            </div>
            <div>
              <h5>Atención al usuario</h5>
              <ul>
                <li>
                  <SmartLink href="/">Contáctenos</SmartLink>
                </li>
                <li>
                  <SmartLink href="/">Servicio al cliente</SmartLink>
                </li>
                <li>
                  <SmartLink href="/">Ayuda y soporte</SmartLink>
                </li>
                <li>
                  <SmartLink href="/">Preguntas frecuentes</SmartLink>
                </li>
                <li>
                  <SmartLink href="/">Oficinas y canales</SmartLink>
                </li>
                <li>
                  <SmartLink href="/">Asistencia técnica</SmartLink>
                </li>
              </ul>
            </div>
            <div>
              <h5>Información de interés</h5>
              <ul>
                <li>
                  <SmartLink href="/">Tarifas y comisiones</SmartLink>
                </li>
                <li>
                  <SmartLink href="/">Términos y condiciones</SmartLink>
                </li>
                <li>
                  <SmartLink href="/">Política de privacidad</SmartLink>
                </li>
                <li>
                  <SmartLink href="/">Política de cookies</SmartLink>
                </li>
                <li>
                  <SmartLink href="/">Alertas y recomendaciones</SmartLink>
                </li>
              </ul>
            </div>
            <div className={styles.legalList}>
              <h5>Cumplimiento Legal y Regulación</h5>
              <p>
                En VengaYa operamos bajo la vigilancia de la Superintendencia de Sociedades y
                cumplimos con todos los requisitos legales exigidos por la legislación colombiana,
                tales como:
              </p>
              <ul>
                <li>Registro Único de Operadores de Libranza</li>
                <li>Reportes a centrales de riesgo</li>
                <li>
                  Cumplimiento de los límites de tasas de interés definidos por el Banco de la
                  República
                </li>
                <li>Ley de Habeas Data</li>
                <li>
                  Normativa SARLAFT (Sistema de Administración del Riesgo de Lavado de Activos y
                  Financiación del Terrorismo)
                </li>
                <li>Disponibilidad clara y oportuna de información para nuestros clientes</li>
              </ul>
              <h5>Cumplimiento Legal y Regulación</h5>
              <div className={styles.legalListImageWrapper}>
                <Image
                  alt=""
                  src={'/images/logo_camaradecomercio.png'}
                  width={1000}
                  height={1000}
                  className={styles.legalListImage}
                  loading="lazy"
                  draggable={false}
                />
                <Image
                  alt=""
                  src={'/images/logo_registrouniconacional.png'}
                  width={1000}
                  height={1000}
                  className={styles.legalListImage}
                  loading="lazy"
                  draggable={false}
                />
                <Image
                  alt=""
                  src={'/images/logo_superintendencia.png'}
                  width={1000}
                  height={1000}
                  className={styles.legalListImage}
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </div>
          </div>

          <div className={styles.bottomRow}>
            <div className={styles.logoRedes}>
              <SmartLink href="/" aria-label="Home">
                <Image
                  src="/logo.webp"
                  alt="Logo VengaYa"
                  width={160}
                  height={60}
                  loading="lazy"
                  draggable={false}
                />
              </SmartLink>
              <div className={styles.socials}>
                <SmartLink href="https://www.linkedin.com" aria-label="LinkedIn">
                  <FaLinkedin size={24} color="#0A66C2" />
                </SmartLink>
                <SmartLink href="https://www.facebook.com" aria-label="Facebook">
                  <FaFacebookF size={24} color="#1877F2" />
                </SmartLink>
                <SmartLink href="https://www.instagram.com" aria-label="Instagram">
                  <FaInstagram size={24} color="#E4405F" />
                </SmartLink>
                <SmartLink href="https://www.youtube.com" aria-label="YouTube">
                  <FaYoutube size={24} color="#FF0000" />
                </SmartLink>
              </div>
            </div>
            <p className={styles.copy}>
              @2025 Vengal S.A.S. Todos los derechos reservados. Empresa legalmente constituida en
              Colombia, con sede en Transversal 72 C # 82 C - 04, Bogotá D.C. Operamos bajo el
              cumplimiento de la normativa vigente y la supervisión de la Superintendencia de
              Sociedades.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
