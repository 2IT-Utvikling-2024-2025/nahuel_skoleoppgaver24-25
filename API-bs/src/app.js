const express = require("express");
const cors = require("cors");

const authRoutes = require("./v1/routes/authRoutes");

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/API-bs/v1/auth", authRoutes);

//Start server
app.listen(3000, () => {
  console.log("Server on port", 3000);
});
