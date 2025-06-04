import React, { useState } from "react";
import "./styles/LoginForm.css";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3000/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Ukjent feil ved innlogging");
      } else {
        // Returner token + rolle til parent (App.js)
        onLogin(data.token, data.role);
      }
    } catch (err) {
      console.error(err);
      setError("Nettverksfeil. Prøv igjen.");
    }
  };

  return (
    <div className="login-container">
      <h2>Logg inn</h2>
      <form onSubmit={handleSubmit} className="login-form">
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
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn">Logg inn</button>
      </form>
    </div>
  );
}

export default LoginForm;