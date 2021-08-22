import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <ul className="header__nav--ul">
      <li className="header__nav--li">
        <NavLink to="/login">Login</NavLink>
      </li>
      <li className="header__nav--li">
        <NavLink to="/signup">SignUp</NavLink>
      </li>
      <li className="header__nav--li">
        <NavLink to="/add_class">Add Class</NavLink>
      </li>
      <li className="header__nav--li">
        <NavLink to="/add_student">Add Student</NavLink>
      </li>
      <li className="header__nav--li">
        <NavLink to="/add_marks">Add Marks</NavLink>
      </li>
      <li className="header__nav--li">
        <NavLink to="/view_result">View Result</NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
