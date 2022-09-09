import styles from './Task.module.scss'
import { CalendarBlank, Check, Trash } from 'phosphor-react'

export function Task(props) {
  const styleIsDone = props.isDone ? styles.done : ''
  console.log(props)
  return (
    <li className={styles.task}>
      <label>
        <input type="checkbox" checked={props.isDone} onChange={props.onCheck} />

        <span>
          <Check />
        </span>
      </label>
 
      <p className={styleIsDone}>

        {props.content}
      </p>

      <div className={styles.buttonDataTrash}>
        <button onClick={props.onRemove}>
          <Trash />
        </button>
        <p> <CalendarBlank /> até {props.date}</p>
      </div>
    </li>
  )
}
