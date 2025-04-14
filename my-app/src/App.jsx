import './App.css'
import Taskform from './Taskform.jsx'
import Task from './Task.jsx';
import { useEffect,useState } from 'react';

function App() {
  const[tasks,setTasks]=useState([]);
  useEffect(() => {
    if(tasks===null){
      alert ('read here');
    }
    localStorage.setItem('tasks',JSON.stringify(tasks));
  },[tasks]);
  function addTask(name){
    setTasks(prev =>{
      return [...prev,{name:name,done:false}];
    });
  }

  return (
    <main>
      <Taskform onAdd={addTask}/>
      {tasks.map(task=>(
        <Task{...task} />
      ))}
    </main>      
  );
}

export default App
