import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navigation() {
  const isAuthenticated = useSelector((state) => state.auth.isAuth);

  return (
    <ul className="header__nav--ul">
      {!isAuthenticated && (
        <li className="header__nav--li">
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
      {!isAuthenticated && (
        <li className="header__nav--li">
          <NavLink to="/signup">SignUp</NavLink>
        </li>
      )}
      {isAuthenticated && (
        <li className="header__nav--li">
          <NavLink to="/add_class">Add Class</NavLink>
        </li>
      )}
      {isAuthenticated && (
        <li className="header__nav--li">
          <NavLink to="/add_student">Add Student</NavLink>
        </li>
      )}
      {isAuthenticated && (
        <li className="header__nav--li">
          <NavLink to="/add_marks">Add Marks</NavLink>
        </li>
      )}
      {isAuthenticated && (
        <li className="header__nav--li">
          <NavLink to="/view_result">View Result</NavLink>
        </li>
      )}
    </ul>
  );
}

export default Navigation;
