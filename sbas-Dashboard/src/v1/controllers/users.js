const {pool} = require('../data/db');

const getAllUsers = async (req, res) => {
    try {
        const [results] = await pool.query('SELECT * FROM users'); 
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
};

const getUserbyName = async (req, res) => {
    const { username } = req.params;
    try {
        const [results] = await pool.query('SELECT * FROM users WHERE user_name = ?', [username]); 
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
};

module.exports = { getAllUsers, getUserbyName };