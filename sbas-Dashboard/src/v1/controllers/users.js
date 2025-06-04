const {pool} = require('../data/db');

const getAllUsers = async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM users'); 
        res.status(200).json(results);
    } catch (error) {
        console.error("Error i getAllUsers:", error);
        res.status(500).json({ message: error.message }); 
    }
};

const getUserbyName = async (req, res) => {
    const { username } = req.params;
    try {
      const [results] = await pool.query(
        "SELECT * FROM users WHERE user_name = ?",
        [username]
      );
      if (results.length === 0) {
        return res.status(404).json({ message: "Bruker ikke funnet" });
      }
      res.status(200).json(results[0]);
    } catch (error) {
      console.error("Error i getUserbyName:", error);
      res.status(500).json({ message: error.message });
    }
  };
  

const deleteUser = async (req, res) => {
    const { username } = req.params;
    try {
      const [result] = await pool.query(
        "DELETE FROM users WHERE user_name = ?",
        [username]
      );
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Bruker ikke funnet" });
      }
      res.status(200).json({ message: "Bruker slettet" });
    } catch (error) {
      console.error("Error i deleteUser:", error);
      res.status(500).json({ message: error.message });
    }
  };

module.exports = { getAllUsers, deleteUser, getUserbyName };