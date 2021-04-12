
const Task = ({ tasks, setTask }) => {

  const onClickCheckHandler = () => {

  }

  const onClickTrashHadndler = (id) => {
    setTask(tasks.filter(task => task.id !== id))
  }

  return (
    <div>
      {tasks.map(task => <div className="task">
        <li>{task.task}</li>
        <button className='check' onClick={onClickCheckHandler}><i className="fas fa-check"></i></button>
        <button className='trash' onClick={() => onClickTrashHadndler(task.id)}><i className="far fa-trash-alt"></i></button>
      </div>)}
    </div>
  )
}

export default Task