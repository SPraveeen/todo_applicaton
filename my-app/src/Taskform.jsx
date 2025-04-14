import { useState } from "react";

export default function Taskform({onAdd}) {
    const [taskName, setTaskName] = useState(initialState:'');
    return(
    <form onSubmit={ev => onAdd(taskName)}>
        <button>+</button>
        <input type="text" 
        value={taskName}
        onChange={ev=>setTaskName(ev.target.value)}
        placeholder="Your next task..." />
    </form>
        );
}