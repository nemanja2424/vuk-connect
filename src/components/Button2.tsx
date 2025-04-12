import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Buttons.module.css'
const Button2 = () => {
  return (
    <button className={styles.button2}>
        Book Call&nbsp;
        <FontAwesomeIcon icon={faArrowRight} style={{width: '20px'}}/>
    </button>
  );
};

export default Button2;
