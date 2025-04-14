import './App.css'
import Taskform from './Taskform.jsx'
import Task from './Task.jsx';
import { useState } from 'react';

function App() {
  const[tasks,setTasks]=useState(initialState:[]);
  function addTask(name){
    setTasks(value: prev =>{
      return [...prev,{name:name,done:false}];
    });
  }

  return (
    <main>
      <Taskform onAdd={addTask}/>
      {tasks.map(task=>(
        <Task />
      ))}
    </main>      
  );
}

export default App
