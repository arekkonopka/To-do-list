import { useState } from "react"
import SingleTask from "./singleTask"

const Task = ({ tasks, setTask, selectItems }) => {
  const [editTrue, setEditTrue] = useState(false)



  return (
    <div>
      {editTrue ?
        <SingleTask tasks={tasks} selectItems={selectItems} setTask={setTask} editTrue={editTrue} setEditTrue={setEditTrue} />
        :
        <SingleTask tasks={tasks} selectItems={selectItems} setTask={setTask} editTrue={editTrue} setEditTrue={setEditTrue} />}
    </div>
  )
}

export default Task