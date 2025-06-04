const jwt = require("jsonwebtoken");

const SECRET_KEY = "your_secret_key";

//authenticate web token
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
  
    if (!token) {
      return res.sendStatus(401).json({ message: "Unauthorized" });
    }
  
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
            return res.sendStatus(403).json({ message: "Forbidden (token invalid/expired)" });
      }
  
      req.user = user;
      next();
    });
  }

function authorizeRoles(...allowedRoles) {
    return (req, res, next) => {
        if (!req.user || !allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden" });
        }
        next();
    }
}

module.exports = {
    authenticateToken,
    authorizeRoles
}