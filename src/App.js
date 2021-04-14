import { useState, useEffect } from 'react';
import './assets/style/App.sass';
import Input from './components/Input';
import Task from './components/Task';

function App() {
  const [tasks, setTask] = useState(JSON.parse(window.localStorage.getItem('task')))
  const [selectItems, setSelectItems] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    localStorage()
  }, [tasks])

  // useEffect(() => {
  //   getLocalStorage()
  // }, [])

  const localStorage = () => {
    if (window.localStorage.getItem('task') !== []) {
      window.localStorage.setItem("task", JSON.stringify(tasks))
    }
  }


  // const getLocalStorage = () => {
  //   if (window.localStorage.getItem("task") === null) {
  //     window.localStorage.setItem('task', JSON.stringify([]))
  //   } else {
  //     setTask(JSON.parse(window.localStorage.getItem('task')))
  //   }
  // }

  return (
    <div className="App">
      <Input inputValue={inputValue} setInputValue={setInputValue} tasks={tasks} setTask={setTask} selectItems={selectItems} setSelectItems={setSelectItems} />
      <Task inputValue={inputValue} setInputValue={setInputValue} tasks={tasks} setTask={setTask} selectItems={selectItems} />
    </div>
  );
}

export default App;
