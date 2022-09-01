import './styles/global.scss';
import styles from './app.module.scss';

import logoSvg from './assets/logo.svg'

function App() {
  return (
    <header className={styles.header}>
      <img className="logo" src={logoSvg} alt="AfroToDo" />
    </header>
  )
  
}

export default App
