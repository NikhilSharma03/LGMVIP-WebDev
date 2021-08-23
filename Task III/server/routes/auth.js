const routes = require("express").Router();
const routesController = require("./../controllers/auth");

routes.post("/login_student", routesController.studentLogin);
routes.post("/login_teacher", routesController.teacherLogin);

routes.post("/signup_student", routesController.studentSignUp);
routes.post("/signup_teacher", routesController.teacherSignUp);

module.exports = routes;
