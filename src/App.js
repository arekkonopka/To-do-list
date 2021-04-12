import { useState } from 'react';
import './assets/style/App.sass';
import Input from './components/Input';
import Task from './components/Task';

function App() {
  const [tasks, setTask] = useState([])
  return (
    <div className="App">
      <Input tasks={tasks} setTask={setTask} />
      <Task tasks={tasks} setTask={setTask} />
    </div>
  );
}

export default App;
