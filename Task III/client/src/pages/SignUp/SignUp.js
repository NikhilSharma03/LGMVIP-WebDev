import React, { useState } from "react";
import "./SignUp.css";
import InputField from "./../../components/InputField/InputField";
import SubmitButton from "./../../components/SubmitButton/SubmitButton";

function SignUp() {
  const [semail, setSEmail] = useState("");
  const [spassword, setSPassword] = useState("");
  const [temail, setTEmail] = useState("");
  const [tpassword, setTPassword] = useState("");

  const onStudentSubmitHandler = (event) => {
    event.preventDefault();
    const dataBody = {
      semail,
      spassword,
    };
    console.log("DATA ==>", dataBody);
  };

  const onTeacherSubmitHandler = (event) => {
    event.preventDefault();
    const dataBody = {
      temail,
      tpassword,
    };
    console.log("DATA ==>", dataBody);
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
