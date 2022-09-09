import styles from './Task.module.scss'
import { CalendarBlank, CalendarCheck, Check, Trash } from 'phosphor-react'

export function Task(props) {
  const styleIsDone = props.isDone ? styles.done : ''
  return (
    <li className={styles.task}>
      <div className={styles.labelTextTrash}>
      <label>
        <input type="checkbox" checked={props.isDone} onChange={props.onCheck} />

        <span>
          <Check />
        </span>
      </label>
 
      <p className={styleIsDone}>

        {props.content}
      </p>

        <button onClick={props.onRemove}>
          <Trash />
        </button>
        </div>
      <div className={styles.buttonDataTrash}>
        <p> <CalendarCheck /> até {props.date}</p>
        <p> <CalendarBlank /> até {props.date}</p>
        
      </div>
    </li>
  )
}

