import styles from './Task.module.scss'
import { Check, Trash } from 'phosphor-react'

export function Task(props) {
  return (
    <li className={styles.task}>
      <label>
        <input type="checkbox" />

        <span>
          <Check />
        </span>
      </label>

      <p>
        {props.content}
      </p>

      <button>
        <Trash />
      </button>
    </li>
  )
}