import React, { useState } from "react";
import "./AddStudent.css";
import InputField from "../../components/InputField/InputField";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

function AddStudent() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [classNum, setClassNum] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const dataBody = {
      name,
      roll,
      classNum,
    };
    console.log("Data ==>", dataBody);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmitHandler} className="form">
        <h1 className="form__head">Add Student</h1>
        <InputField
          type="text"
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
        />
        <InputField
          type="text"
          onChange={(event) => setRoll(event.target.value)}
          placeholder="Roll No"
        />
        <InputField
          type="text"
          onChange={(event) => setClassNum(event.target.value)}
          placeholder="Class"
        />
        <SubmitButton>Submit</SubmitButton>
      </form>
    </div>
  );
}

export default AddStudent;
