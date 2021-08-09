import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <h1>Fetch User</h1>
      <button onClick={props.onClick}>Get Users</button>
    </header>
  );
}

export default Header;
