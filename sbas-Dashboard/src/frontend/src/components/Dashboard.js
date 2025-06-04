// src/frontend/src/components/Dashboard.js
import React, { useEffect, useState, useCallback } from "react";
import AddUserForm from "./AddUserForm";
import "./styles/Dashboard.css";

function Dashboard({ token, role }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Memoiserer fetchUsers slik at referansen ikke endres ved hver rendering.
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:3000/v1/users/allUsers", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Feil ved henting av brukere");
      }
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Feil i fetchUsers:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [token]);

  // Hent brukere én gang ved mount (og når token endres)
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Slett‐funksjon for admin
  const handleDelete = async (username) => {
    if (!window.confirm(`Er du sikker på at du vil slette "${username}"?`)) {
      return;
    }
    setError("");
    try {
      const res = await fetch(`http://localhost:3000/v1/users/${username}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Feil ved sletting av bruker");
      }
      // Når slettingen er vellykket, hente listen på nytt
      fetchUsers();
    } catch (err) {
      console.error("Feil i handleDelete:", err);
      setError(err.message);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      {error && <p className="error">{error}</p>}

      {loading ? (
        <p className="loading">Laster brukere …</p>
      ) : (
        <table className="users-table">
          <thead>
            <tr>
              <th>Brukernavn</th>
              <th>Rolle</th>
              {role === "admin" && <th>Handlinger</th>}
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.user_name}>
                <td>{u.user_name}</td>
                <td>{u.role}</td>
                {role === "admin" && (
                  <td>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(u.user_name)}
                    >
                      Slett
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {role === "admin" && (
        <div className="add-user-section">
          <h3>Legg til ny bruker (kun admin)</h3>
          <AddUserForm token={token} onUserAdded={fetchUsers} />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
