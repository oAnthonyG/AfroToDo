import styles from './Header.module.scss';
import logoSvg from '../assets/logo.svg';

export function Header(){
    return(
        <header className={styles.header}>
      <img className="logo" src={logoSvg} alt="AfroToDo" />
    </header>
    )
}

