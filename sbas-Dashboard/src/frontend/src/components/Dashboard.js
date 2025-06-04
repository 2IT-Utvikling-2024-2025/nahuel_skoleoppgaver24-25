import React, { useEffect, useState } from "react";
import AddUserForm from "./AddUserForm";


function Dashboard({ token, role }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/v1/users/allUsers")
      .then(res => {
        if (!res.ok) throw new Error("Kunne ikke hente brukere");
        return res.json();
      })
      .then(data => setUsers(data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div className="dashboard">
      <h2>{role === "admin" ? "Admin" : "Bruker"} Dashboard</h2>
      {error && <div className="error">{error}</div>}

      <h3>Brukere i databasen:</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.user_name + " - " + user.role}</li>
        ))}
      </ul>

      {role === "admin" && (
            <AddUserForm onUserAdded={() => {
                // Hent brukerne på nytt etter at en er lagt til
                fetch("http://localhost:3000/v1/users/allUsers")
                .then(res => res.json())
                .then(setUsers);
            }} />
        )}

    </div>
  );
}

export default Dashboard;