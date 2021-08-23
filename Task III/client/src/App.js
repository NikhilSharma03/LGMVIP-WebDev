import React, { Suspense } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  Login,
  SignUp,
  AddStudent,
  AddMarks,
  AddClass,
  ViewResult,
} from "./pages/index";

function App() {
  return (
    <Header>
      <Switch>
        <Route path="/view_result" exact component={ViewResult} />
        <Route path="/add_class" exact component={AddClass} />
        <Route path="/add_marks" exact component={AddMarks} />
        <Route path="/add_student" exact component={AddStudent} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Header>
  );
}

export default App;
