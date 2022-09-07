import styles from './Task.module.scss'
import { Check, Trash } from 'phosphor-react'

export function Task(props) {
  const styleIsDone = props.isDone ? styles.done : ''
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

      <button onClick={props.onRemove}>
        <Trash />
      </button>
    </li>
  )
}