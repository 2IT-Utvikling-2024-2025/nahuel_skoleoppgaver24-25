const jwt = require("jsonwebtoken");

const SECRET_KEY = "your_secret_key";

//authenticate web token
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
  
    if (!token) {
      return res.sendStatus(401).json({ message: "Unauthorized: Ingen token funnet" });
    }
  
    jwt.verify(token, SECRET_KEY, (err, decodedPayload) => {
      if (err) {
            return res.sendStatus(403).json({ message: "Forbidden: Ugyldig eller utløpt token" });
      }
  
      req.user = decodedPayload;
      next();
    });
  }

function authorizeRoles(...allowedRoles) {
    return (req, res, next) => {
        if (!req.user || !allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden: Mangler rettigheter" });
        }
        next();
    }
}

module.exports = {
    authenticateToken,
    authorizeRoles
}