import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Buttons.module.css'
const Button1 = () => {
  return (
    <button className={styles.button1}>
        Book Call&nbsp;
        <FontAwesomeIcon icon={faArrowRight} style={{width: '20px'}}/>
    </button>
  );
};

export default Button1;
