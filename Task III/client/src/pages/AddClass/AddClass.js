import React, { useState } from "react";
import "./AddClass.css";
import InputField from "../../components/InputField/InputField";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function AddClass(props) {
  const [classNum, setClassNum] = useState("");

  const isAuthenticated = useSelector((state) => state.auth.isAuth);
  if (!isAuthenticated) {
    return <Redirect from="/" to="/login"></Redirect>;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const dataBody = {
      className: classNum,
    };
    fetch("http://localhost:5000/api/classes/add", {
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
        props.history.push("/add_student");
      });
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
