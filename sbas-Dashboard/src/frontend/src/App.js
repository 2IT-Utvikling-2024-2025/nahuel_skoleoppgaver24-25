import React, { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  // Hent initielt state fra localStorage (hvis det finnes)
  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });
  const [role, setRole] = useState(() => {
    return localStorage.getItem("role") || null;
  });

  // Hvert gang token eller role endres, lagre i localStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }

    if (role) {
      localStorage.setItem("role", role);
    } else {
      localStorage.removeItem("role");
    }
  }, [token, role]);

  // Kalles når LoginForm får et nytt token
  const handleLogin = (receivedToken, receivedRole) => {
    setToken(receivedToken);
    setRole(receivedRole);
  };

  // Valgfritt: funksjon for logout
  const handleLogout = () => {
    setToken(null);
    setRole(null);
    // localStorage fjernes automatisk via useEffect‐hook ovenfor
  };

  // Hvis bruker ikke er logget inn, vis LoginForm
  if (!token) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return(
    <div>
    <button className="btn-logout" onClick={handleLogout}>
    Logg ut
  </button>
  <Dashboard token={token} role={role} />
  </div>
  )
}



export default App;