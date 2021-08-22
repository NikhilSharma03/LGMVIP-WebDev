import React, { useState } from "react";
import "./AddClass.css";
import InputField from "../../components/InputField/InputField";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

function AddClass() {
  const [classNum, setClassNum] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const dataBody = {
      classNum,
    };
    console.log("Data ==>", dataBody);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmitHandler} className="form">
        <h1 className="form__head">Add Class</h1>
        <InputField
          type="text"
          onChange={(event) => setClassNum(event.target.value)}
          placeholder="Class Name"
        />
        <SubmitButton>Submit</SubmitButton>
      </form>
    </div>
  );
}

export default AddClass;
