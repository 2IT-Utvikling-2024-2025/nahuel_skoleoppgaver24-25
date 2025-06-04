import React, { useState } from "react";
import "./styles/AddUserForm.css";

function AddUserForm({ token, onUserAdded }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:3000/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username, password, role }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Kunne ikke legge til bruker");
      } else {
        setSuccess("Bruker opprettet!");
        setUsername("");
        setPassword("");
        setRole("user");
        // Hent hele listen på nytt
        onUserAdded();
      }
    } catch (err) {
      console.error(err);
      setError("Nettverksfeil ved oppretting av bruker");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-user-form">
      <input
        type="text"
        placeholder="Brukernavn"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="input-field"
      />
      <input
        type="password"
        placeholder="Passord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="input-field"
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="input-field"
      >
        <option value="user">Standard bruker</option>
        <option value="admin">Admin</option>
      </select>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <button type="submit" className="btn">
        Legg til bruker
      </button>
    </form>
  );
}

export default AddUserForm;