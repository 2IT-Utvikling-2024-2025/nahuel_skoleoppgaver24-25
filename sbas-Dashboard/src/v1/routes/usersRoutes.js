const express = require("express");
const { authenticateToken, authorizeRoles } = require("../middleware/authMiddleware");
const {getAllUsers, deleteUser, getUserbyName} = require("../controllers/users");

const router = express.Router();

router.get(
    "/allUsers",
    authenticateToken,
    getAllUsers
);

router.get("/:username",
    authenticateToken,
    getUserbyName
);

router.delete(
    "/:username",
    authenticateToken,
    authorizeRoles("admin"),
    deleteUser
);

module.exports = router;