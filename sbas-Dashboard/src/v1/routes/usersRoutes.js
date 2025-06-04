const express = require("express");

const {getAllUsers, getUserbyName} = require("../controllers/users");

const router = express.Router();

router.get("/allUsers", getAllUsers);
router.get("/:username", getUserbyName);


module.exports = router;