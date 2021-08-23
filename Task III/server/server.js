const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
// Route Handler
const authRoutes = require("./routes/auth");
const classesRoutes = require("./routes/classes");
const studentRoutes = require("./routes/student");
const marksRoutes = require("./routes/marks");

app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/classes", classesRoutes);
app.use("/api/marks", marksRoutes);

mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(process.env.PORT || 5000).then(() => {
    console.log("Server is running on port 5000");
  });
});
