const routes = require("express").Router();
const marksController = require("./../controllers/marks");

routes.post("/add", marksController.addMarks);
routes.post("/view", marksController.viewMarks);

module.exports = routes;
