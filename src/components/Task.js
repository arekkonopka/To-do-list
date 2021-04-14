import { useState, useEffect } from "react"

const Task = ({ tasks, setTask, selectItems }) => {
  const [editTrue, setEditTrue] = useState(false)
  const [editInputValue, setEditInputValue] = useState('')

  const onClickCheckHandler = (id) => {

    setTask(tasks.map(el => {
      if (el.id === id) {
        return { ...el, checked: !el.checked }
      } else {
        return { ...el }
      }

    }))

  }

  const onClickTrashHadndler = (id) => {
    setTask(tasks.filter(task => task.id !== id))
  }

  const onClickEdit = () => {
    setEditTrue(!editTrue)
    if (editTrue === true) {
      setEditInputValue('')
    }
  }


  const changeEditValue = (id) => {

    <input type="text" value={editInputValue} onChange={(e) => setEditInputValue(e.target.value)} />

    setTask(tasks.map(el => {
      if (el.id === id) {
        return { ...el, task: editInputValue }
      } else {
        return { ...el }
      }
    }))
  }

  return (
    <ul className='task-list'>
      {selectItems.map(task =>
        <li className="task" key={task.id}>
          <p style={{ textDecoration: task.checked ? "line-through" : "none" }}>{editTrue ?
            changeEditValue(task.id)
            :
            task.task}</p>
          <button className='check' onClick={() => onClickCheckHandler(task.id)}><i className="fas fa-check"></i></button>
          <button className='trash' onClick={() => onClickTrashHadndler(task.id)}><i className="far fa-trash-alt"></i></button>
          <button className='edit' onClick={() => onClickEdit()}><i className="far fa-edit"></i></button>
        </li>)}
    </ul>
  )
}

export default Task