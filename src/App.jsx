import { useState } from 'react';
import './styles/global.scss';
import styles from './App.module.scss';

import { Header } from './components/Header';
import { Plus } from 'phosphor-react';
import { Task } from './components/Task';

function App() {
  const [taskText, setTaskText] = useState('')
  const [tasks, setTasks] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    const newTask = {
      id: Date.now(),
      content: taskText,
      done: false
    }

    setTasks([...tasks, newTask])
    setTaskText('')
  }

  function handleChangeInput(event) {

    setTaskText(event.currentTarget.value)
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        <form className={styles.addTaskForm} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Insira uma nova atividade"
            value={taskText}
            onChange={handleChangeInput}></input>
          <button><Plus /></button>
        </form>

        <h3 className={styles.status}>Tarefas concluídas <span> 3 de 6</span></h3>

        <ul className={styles.taskList}>
          {tasks.map(task => <Task content={task.content} />)}
        </ul>
      </main>
    </>
  )

}

export default App
