const routes = require("express").Router();
const studentController = require("./../controllers/student");

routes.post("/add", studentController.addStudent);

module.exports = routes;
