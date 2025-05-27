const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "your_secret_key";

const { pool } = require("../data/db");

const register = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const [results] = await pool.query(
      "INSERT INTO users (user_name, hashedpassword, role) VALUES (?, ?, ?)",
      [username, password, role]
    );

    res.status(201).json({
      id: results.insertId,
      username,
      password,
      role,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const [results] = await pool.query(
      "SELECT * FROM users WHERE user_name = ?",
      [username]
    );
    console.log(results);
    const user = results[0];
    console.log(user);

    //Check if user exists and password is correct
    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(401).json({ message: "invalid credentials" });

    const token = jwt.sign(
      { username: user.user_name, role: user.role },
      SECRET_KEY,
      { expiresin: "1h" }
    );
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
};
