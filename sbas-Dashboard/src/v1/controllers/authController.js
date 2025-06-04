// src/v1/controllers/authController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { pool } = require("../data/db");

const SECRET_KEY = "your_secret_key"; 

const register = async (req, res) => {
  const { username, password, role } = req.body;
  if (!username || !password || !role) {
    return res
      .status(400)
      .json({ message: "Fyll ut brukernavn, passord og rolle" });
  }

  try {
    // Sjekk om brukernavn finnes fra før
    const [existing] = await pool.query(
      "SELECT * FROM users WHERE user_name = ?",
      [username]
    );
    if (existing.length > 0) {
      return res.status(409).json({ message: "Bruker finnes allerede" });
    }

    // Hash passord
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert i DB
    const [results] = await pool.query(
      "INSERT INTO users (user_name, password, role) VALUES (?, ?, ?)",
      [username, hashedPassword, role]
    );

    // Hent nyopprettet bruker for å kunne signere token
    const [rows] = await pool.query(
      "SELECT * FROM users WHERE user_id = ?",
      [results.insertuser_Id]
    );
    const user = rows[0];

    // Lag JWT
    const token = jwt.sign(
      { username: user.user_name, role: user.role },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    // Returner token + rolle
    return res.status(201).json({ token, role: user.role });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};


const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Fyll ut brukernavn og passord" });
  }

  try {
    const [rows] = await pool.query(
      "SELECT * FROM users WHERE user_name = ?",
      [username]
    );
    const user = rows[0];
    if (!user) {
      return res.status(401).json({ message: "Ugyldige brukernavn/passord" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Ugyldige brukernavn/passord" });
    }

    // signer token
    const token = jwt.sign(
      { username: user.user_name, role: user.role },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ token, role: user.role });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  register,
  login,
};