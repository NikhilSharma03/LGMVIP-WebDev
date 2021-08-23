const routes = require("express").Router();
const classesController = require("./../controllers/classes");

routes.post("/add", classesController.addClasses);

module.exports = routes;
