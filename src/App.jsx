import './styles/global.scss';
import styles from './App.module.scss';

import { Header } from './components/Header';
import {Plus} from 'phosphor-react';
import { Task } from './components/Task';

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <form className={styles.addTaskForm}>
          <input type="text" placeholder="Insira uma nova atividade"></input>
          <button><Plus /></button>
        </form>

        <h3 className={styles.status}>Tarefas concluídas <span> 3 de 6</span></h3>

        <ul className={styles.taskList}>
          <Task content="Hello, Friend!"/>
          <Task content="Buy a car"/>
          <Task content=" Sold the chicken"/>
          <Task content="soup with a soda on the side"/>
        </ul>
      </main>
    </>
  )

}

export default App
