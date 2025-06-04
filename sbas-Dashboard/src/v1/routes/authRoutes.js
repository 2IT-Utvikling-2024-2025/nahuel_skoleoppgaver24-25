const express = require("express");
const { register, login } = require("../controllers/authController");
const { authenticateToken, authorizeRoles } = require("../middleware/authMiddleware");

const router = express.Router();

// Kun admin kan kalle /register-endepunktet
router.post(
    "/register",
    authenticateToken,
    authorizeRoles("admin"),
    register
  );
  
router.post("/login", login);

module.exports = router;