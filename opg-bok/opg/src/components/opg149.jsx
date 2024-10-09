import { useState } from "react";

export default function Partall() {
    const [name, setName] = useState("");
    const [task, setTask] = useState([]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      (`The name you entered was: ${name}`);
    }
  
    return (
      <>
      <form onSubmit={handleSubmit}>
        <label>
          <input 
            type="number" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button onClick={() => {
          setTask([
            ...task,
            {name: name % 2 == 0 ? name + " is an even number" : name + " is an odd number"}
          ]);
        }}>Check</button>
      </form>
      <ul>
          {task.map(task => (
            <li key={task.id}>
              {task.name}{''}
  
            </li>
          ))}
        </ul>
      </>
    )
  }