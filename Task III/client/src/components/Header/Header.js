import React from "react";
import "./Header.css";
import Navigation from "./Navigation/Navigation";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="app">
      <header className="header">
        <h1>
          <Link to="/">LGMVIP</Link>
        </h1>
        <nav>
          <Navigation />
        </nav>
      </header>
      <main className="main__container">{props.children}</main>
    </div>
  );
}

export default Header;
