import { ButtonProps } from '@/interfaces/buttons';
import SmartLink from '../smartLink/SmartLink';
import styles from './Buttons.module.css';

export default function Buttons({
  btnPrimaryLabel,
  btnSecondaryLabel,
  hrefURI1,
  hrefURI2,
}: ButtonProps) {
  return (
    <div className={styles.buttons}>
      {btnPrimaryLabel && hrefURI1 && (
        <SmartLink href={hrefURI1} className={styles.btnPrimary}>
          {btnPrimaryLabel}
        </SmartLink>
      )}

      {btnSecondaryLabel && hrefURI2 && (
        <SmartLink href={hrefURI2} className={styles.btnSecondary}>
          {btnSecondaryLabel}
        </SmartLink>
      )}
    </div>
  );
}
