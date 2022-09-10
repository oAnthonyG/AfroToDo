import styles from './Task.module.scss'
import { CalendarBlank, CalendarCheck, Check, Trash, PencilSimpleLine } from 'phosphor-react'

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
        <button className={styles.buttonEdit}>
          <PencilSimpleLine />
        </button>
        <button onClick={props.onRemove}>
          <Trash />
        </button>
      </div>
      <div className={styles.buttonDataTrash}>
        {props.dateFinish && <p className={styles.finishP}><CalendarCheck className={styles.svgCheck} />Finalizado em {props.dateFinish}</p>}

        <p> <CalendarBlank /> até {props.date}</p>

      </div>
    </li>
  )
}

