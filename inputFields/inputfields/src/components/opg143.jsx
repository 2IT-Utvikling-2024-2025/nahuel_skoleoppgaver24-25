
import { useState } from "react";


let nextId = 0;

export default function MyForm() {
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
          placeholder="cm"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button onClick={() => {
        setTask([
          ...task,
          {id: nextId++, name: name / 2.54}
        ]);
      }}>Convert</button>
    </form>
    <ul>
        {task.map(task => (
          <li key={task.id}>
            <input type="checkbox" />
            {task.name}{''}
            <button onClick={() => {setTask(task.filter(a => a.id !== task.id))}}>Delete</button>

          </li>
        ))}
      </ul>
    </>
  )
}