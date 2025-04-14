import { useState } from "react";

export default function Taskform() {
    const[taskName,setTaskName]=useState(initialState:'');
    return(
    <form>
        <button>+</button>
        <input type="text" 
        value={taskName}
        onChange={ev=>setTaskName(ev.target.value)}
        placeholder="Your next task..." />
    </form>
        );
}