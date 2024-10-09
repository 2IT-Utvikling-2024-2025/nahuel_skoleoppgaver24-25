import { useState } from "react";
import './css/valuta.css';

function ValutaKurs(){
    const [name, setName] = useState("");
    const [task, setTask] = useState([]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      (`u fucked up`);
    }
  
    return (
      <div className="content-valuta">
        <form onSubmit={handleSubmit}>
        <label>
          <input
            className="input-field"
            type="number"
            placeholder="kr"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
         <button className="check" onClick={() => {
          setTask([
            ...task,
            {name: name / 10 + '$'}
          ]);
        }}>Check Value of currency</button>
        
      </form>
      <ul>
          {task.map(task => (
            <li key={task.id}>
              {task.name}{''}
  
            </li>
          ))}
        </ul>
      </div>
    )
}

export default ValutaKurs