import { useState, useEffect } from 'react';
import './assets/style/App.sass';
import Input from './components/Input';
import Task from './components/Task';

function App() {


  const [tasks, setTask] = useState(() => {
    if (window.localStorage.getItem('task') !== null) { return JSON.parse(window.localStorage.getItem('task')) }
    else { return [] }
  })
  const [selectItems, setSelectItems] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    setLocalStorage()
  }, [tasks])

  const setLocalStorage = () => {
    window.localStorage.setItem("task", JSON.stringify(tasks))
  }


  return (
    <div className="App">
      <Input inputValue={inputValue} setInputValue={setInputValue} tasks={tasks} setTask={setTask} selectItems={selectItems} setSelectItems={setSelectItems} />
      <Task inputValue={inputValue} setInputValue={setInputValue} tasks={tasks} setTask={setTask} selectItems={selectItems} />
    </div>
  );
}

export default App;
