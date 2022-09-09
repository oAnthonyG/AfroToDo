import { useState } from 'react';
import './styles/global.scss';
import styles from './App.module.scss';

import { Header } from './components/Header';
import { ClipboardText, Plus } from 'phosphor-react';
import { Task } from './components/Task';

function App() {
  const [taskText, setTaskText] = useState('')
  const [dataTask, setDataTesk] = useState('')
  const [tasks, setTasks] = useState(() => {
    const localTasks = localStorage.getItem('@AfroToDo:tasks');

    return JSON.parse(localTasks) || [];
  });
  const doneCount = tasks.reduce((acc, task) => {
    return task.done ? acc += 1 : acc;
  }, 0);


  function handleSubmit(event) {
    event.preventDefault()

    const dateFormated = dataTask.replace(
      /^(\d{2})(?:\/|-)?(\d{2})(?:\/|-)(\d{4})$/,
      '$3-$2-$1'
    )
    if (!dateFormated.match(/^\d{4}-\d{2}-\d{2}$/)) {
      console.error('Data invalida')
      return
    }
    console.log(dateFormated)

    const newTask = {
      id: Date.now(),
      content: taskText,
      done: false,
      date: dataTask
    }

    const newTasks = [...tasks, newTask];

    localStorage.setItem('@AfroToDo:tasks', JSON.stringify(newTasks));

    setTasks(newTasks)
    setTaskText('')
    setDataTesk('')
  }
  const handleDataChange = (event) => {
    if (dataTask.length === 10) {
      setDataTesk('')
      return
    }

    const dateFormated = event.target.value
      .replace(/^(\d{2})/, '$1')
      .replace(/^(\d{2})\/?(\d{2})/, '$1/$2')
      .replace(/^(\d{2})\/?(\d{2})\/?(\d{4})$/, '$1/$2/$3')
    setDataTesk(dateFormated)
  }

  function handleChangeInput(event) {

    setTaskText(event.currentTarget.value)
  }

  function handleToggleTask(id) {
    const updatedTasks = tasks.map(task => {
      return task.id === id ? { ...task, done: !task.done } : task
    })
    localStorage.setItem('@AfroToDo:tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks)

    
  }

  function handleRemoveTask(id) {
    const filteredTasks = tasks.filter(task => {
      return task.id !== id
    })
    localStorage.setItem('@AfroToDo:tasks', JSON.stringify(filteredTasks));
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
          <div className={styles.dataButton}>
            <input
              name="dataTask"
              type="text"
              placeholder="Insira a data limite para a atividade"
              value={dataTask}
              onChange={handleDataChange}
            >
            </input>
            <button><Plus /></button>
          </div>
        </form>

        {tasks.length ? (
          <>
            <h3 className={styles.status}>Tarefas concluídas <span> {doneCount} de {tasks.length}</span></h3>

            <ul className={styles.taskList}>

              {tasks.map(task => (
                <Task
                  key={task.id}
                  content={task.content}
                  isDone={task.done}
                  date={task.date}
                  onCheck={() => handleToggleTask(task.id)}
                  onRemove={() => handleRemoveTask(task.id)}
                  onAdd={()=> handleAddData(task.date)}
                />
              ))}
            </ul>
          </>
        ) : (
          <div className={styles.empty}>
            <ClipboardText />
            <p>Você não tem nenhuma tarefa no momento.</p>
            <span>Adicione novas tarefas para que elas sejam mostradas.</span>
          </div>
        )}
      </main>
    </>
  )
}

export default App
