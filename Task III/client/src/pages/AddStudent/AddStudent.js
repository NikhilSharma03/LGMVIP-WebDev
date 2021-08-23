import React, { useState } from "react";
import "./AddStudent.css";
import InputField from "../../components/InputField/InputField";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function AddStudent(props) {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [classNum, setClassNum] = useState("");

  const isAuthenticated = useSelector((state) => state.auth.isAuth);
  if (!isAuthenticated) {
    return <Redirect from="/" to="/login"></Redirect>;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const dataBody = {
      name,
      rollNo: roll,
      className: classNum,
    };
    fetch("http://localhost:5000/api/student/add", {
      method: "POST",
      body: JSON.stringify(dataBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resBody) => {
        console.log(resBody);
        alert(resBody.message);
        props.history.push("/add_marks");
      });
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
