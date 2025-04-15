import './App.css'
import Taskform from './Taskform.jsx'
import Task from './Task.jsx';
import { useEffect,useState } from 'react';

function App() {
  const[tasks,setTasks]=useState([]);

  useEffect(() => {
    if(tasks.length === 0) return;
    localStorage.setItem('tasks',JSON.stringify(tasks));
  },[tasks]);

  useEffect(()=>{
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    setTasks(tasks);
  },[]);

  function addTask(name){
    setTasks(prev =>{
      return [...prev,{name:name,done:false}];
    });
  }
  
  function updateTaskDone(taskIndex,newDone){
    
  }

  return (
    <main>
      <Taskform onAdd={addTask}/>
      {tasks.map((task,index)=>(
        <Task{...task} onToggle={done=>updateTaskDone(index,done)} />
      ))}
    </main>      
  );
}

export default App
