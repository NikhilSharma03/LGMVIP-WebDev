import React from "react";
import "./SubmitButton.css";

function SubmitButton(props) {
  return (
    <button className="submit__button" type="submit">
      {props.children}
    </button>
  );
}

export default SubmitButton;
