import React from "react";
import "./InputField.css";

function InputField(props) {
  return (
    <input
      className="input__field"
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}

export default InputField;
