import './styles/global.scss';
import styles from './App.module.scss'

import {Header} from './components/Header'
import {Plus} from 'phosphor-react'

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <form className={styles.addTaskForm}>
          <input type="text" placeholder="Insira uma nova atividade"></input>
          <button><Plus /></button>
        </form>
      </main>
    </>
  )

}

export default App
