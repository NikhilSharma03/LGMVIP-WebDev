import React, { useState } from "react";
import "./AddMarks.css";
import InputField from "../../components/InputField/InputField";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

function AddMarks() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [classNum, setClassNum] = useState("");
  const [math, setMath] = useState("");
  const [science, setScience] = useState("");
  const [history, setHistory] = useState("");
  const [music, setMusic] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const dataBody = {
      name,
      roll,
      classNum,
      math,
      science,
      history,
      music,
    };
    console.log("Data ==>", dataBody);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmitHandler} className="form">
        <h1 className="form__head">Add Marks</h1>
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
        <h1
          style={{ marginBottom: "1rem", fontSize: "1.5rem" }}
          className="form__head"
        >
          Subjects
        </h1>
        <InputField
          type="text"
          onChange={(event) => setMath(event.target.value)}
          placeholder="Math"
        />
        <InputField
          type="text"
          onChange={(event) => setScience(event.target.value)}
          placeholder="Science"
        />
        <InputField
          type="text"
          onChange={(event) => setHistory(event.target.value)}
          placeholder="History"
        />
        <InputField
          type="text"
          onChange={(event) => setMusic(event.target.value)}
          placeholder="Music"
        />
        <SubmitButton>Submit</SubmitButton>
      </form>
    </div>
  );
}

export default AddMarks;
