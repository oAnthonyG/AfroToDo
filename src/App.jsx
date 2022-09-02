import './styles/global.scss';
import styles from './App.module.scss'

import { Header } from './components/Header'
import { Plus, Trash } from 'phosphor-react'

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
          <li>
            <input type="checkbox" />

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut expedita
              aliquid temporibus magnam voluptates adipisci officia, quis neque minus?
              Laboriosam dolor excepturi eveniet iste velit amet, commodi consequatur a magni!
            </p>

            <button>
              <Trash />
            </button>

          </li>
          <li>
            <input type="checkbox" />

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut expedita
              aliquid temporibus magnam voluptates adipisci officia, quis neque minus?
              Laboriosam dolor excepturi eveniet iste velit amet, commodi consequatur a magni!
            </p>

            <button>
              <Trash />
            </button>
          </li>
          <li>
            <input type="checkbox" />

            <p>
              Lorem ipsum dolor sit, amet
            </p>

            <button>
              <Trash />
            </button>

          </li>
        </ul>
      </main>
    </>
  )

}

export default App
