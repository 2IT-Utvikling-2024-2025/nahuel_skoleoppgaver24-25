const express = require("express");
const cors = require("cors");

const authRoutes = require("./v1/routes/authRoutes");

const dashRoutes = require("./v1/routes/dashRoutes");

const app = express();

//middlewares
app.use(cors());
app.use(express.json());


//Routes
app.use("/v1/auth", authRoutes);

app.use("/v1/dash", require("./v1/routes/dashRoutes"));

//Start server
app.listen(3000, () => {
    console.log("Server on port", 3000);
});