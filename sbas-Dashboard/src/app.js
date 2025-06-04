const express = require("express");
const cors = require("cors");

const authRoutes = require("./v1/routes/authRoutes");

const dashRoutes = require("./v1/routes/dashRoutes");

const usersRoutes = require("./v1/routes/usersRoutes");

const app = express();

//middlewares
app.use(cors());
app.use(express.json());


//Routes
app.use("/v1/auth", authRoutes);

app.use("/v1/dashboard", dashRoutes);

app.use("/v1/users", usersRoutes);

//Start server
app.listen(3000, () => {
    console.log("Server on port", 3000);
});