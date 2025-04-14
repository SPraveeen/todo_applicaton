import Checkbox from "./checkbox.jsx";
;
export default function Task({name,done}){
  return (
    <div className="Task">
    <Checkbox defaultChecked={done}/>
    {name}
    </div>
  )
}