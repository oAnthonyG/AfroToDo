import { useState } from 'react';
import './styles/global.scss';
import styles from './App.module.scss';

import { Header } from './components/Header';
import { Plus } from 'phosphor-react';
import { Task } from './components/Task';

function App() {
  const [taskText, setTaskText] = useState('')
  const [tasks, setTasks] = useState([])

  const doneCount = tasks.reduce((acc, task) =>{
    return task.done ? acc += 1 : acc
  }, 0)

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

  function handleToggleTask(id) {
    const updatedTasks = tasks.map(task => {
      return task.id === id ? { ...task, done: !task.done } : task
    })
    setTasks(updatedTasks)
  }

  function handleRemoveTask(id){
    const filteredTasks = tasks.filter(task =>{
      return task.id !== id
    })
    setTasks(filteredTasks)
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

        <h3 className={styles.status}>Tarefas concluídas <span> {doneCount} de {tasks.length}</span></h3>

        <ul className={styles.taskList}>
          {tasks.map(task =>
            <Task
              content={task.content}
              isDone={task.done}
              onCheck={() => handleToggleTask(task.id)}
              onRemove={()=> handleRemoveTask(task.id)} />)}
        </ul>
      </main>
    </>
  )

}

export default App
