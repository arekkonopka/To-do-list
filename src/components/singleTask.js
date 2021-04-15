import { useRef, useState } from "react"


const SingleTask = ({ selectItems, tasks, setTask, editTrue, setEditTrue }) => {


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
  }


  const changeEditValue = (e) => {
    setTask(tasks.map(el => {
      if (el.id == e.target.id) {
        return { ...el, task: e.target.value }
      } else {
        return { ...el }
      }
    }))
  }


  return (
    <ul className='task-list'>
      {selectItems.map(task =>
        <li className="task" key={task.id}>
          <p style={{ textDecoration: task.checked ? "line-through" : "none" }}>
            {editTrue ?
              <form onSubmit={() => setEditTrue(!editTrue)} >
                {task.id == task.id ? <input type="text" onChange={changeEditValue} id={task.id} value={task.task} className='change-input' /> : task.task}
                <button className='change-button'>Change</button>
              </form>
              :
              task.task}</p>
          <button className='check' onClick={() => onClickCheckHandler(task.id)}><i className="fas fa-check"></i></button>
          <button className='trash' onClick={() => onClickTrashHadndler(task.id)}><i className="far fa-trash-alt"></i></button>
          <button className='edit' onClick={() => onClickEdit(task.id)} ><i className="far fa-edit"></i></button>
        </li>)}
    </ul>
  )
}

export default SingleTask