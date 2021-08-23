import React, { useState } from "react";
import "./SignUp.css";
import InputField from "./../../components/InputField/InputField";
import SubmitButton from "./../../components/SubmitButton/SubmitButton";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function SignUp(props) {
  const [semail, setSEmail] = useState("");
  const [spassword, setSPassword] = useState("");
  const [temail, setTEmail] = useState("");
  const [tpassword, setTPassword] = useState("");

  const isAuthenticated = useSelector((state) => state.auth.isAuth);
  if (isAuthenticated) {
    return <Redirect from="/" to="/"></Redirect>;
  }

  const onStudentSubmitHandler = (event) => {
    event.preventDefault();
    const dataBody = {
      email: semail,
      password: spassword,
    };
    fetch("http://localhost:5000/api/auth/signup_student", {
      method: "POST",
      body: JSON.stringify(dataBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resBody) => {
        console.log(resBody);
        props.history.push("/login");
      });
  };

  const onTeacherSubmitHandler = (event) => {
    event.preventDefault();
    const dataBody = {
      email: temail,
      password: tpassword,
    };
    fetch("http://localhost:5000/api/auth/signup_teacher", {
      method: "POST",
      body: JSON.stringify(dataBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resBody) => {
        console.log(resBody);
        props.history.push("/login");
      });
  };

  return (
    <div className="container">
      <div className="form__container">
        <form onSubmit={onStudentSubmitHandler} className="form">
          <h1 className="form__head">Student</h1>
          <InputField
            onChange={(event) => setSEmail(event.target.value)}
            type="email"
            placeholder="Email"
          />
          <InputField
            onChange={(event) => setSPassword(event.target.value)}
            type="password"
            placeholder="Password"
          />
          <SubmitButton>SignUp</SubmitButton>
        </form>
        <form onSubmit={onTeacherSubmitHandler} className="form">
          <h1 className="form__head">Teacher</h1>
          <InputField
            onChange={(event) => setTEmail(event.target.value)}
            type="email"
            placeholder="Email"
          />
          <InputField
            onChange={(event) => setTPassword(event.target.value)}
            type="password"
            placeholder="Password"
          />
          <SubmitButton>SignUp</SubmitButton>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
