import React, { useState } from "react";
import "./ViewResult.css";
import InputField from "../../components/InputField/InputField";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

function ViewResult() {
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
        <h1 className="form__head">View Result</h1>
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

      {/* <div className="result">
        <h1 className="form__head">Result</h1>
        <h1>
          Name : <span>Test</span>
        </h1>
        <h1>
          Math : <span>94</span>
        </h1>
        <h1>
          Science : <span>99</span>
        </h1>
        <h1>
          History : <span>96</span>
        </h1>
        <h1>
          Music : <span>98</span>
        </h1>
        <h1>
          Sum : <span>389</span>
        </h1>
        <h1>
          Total : <span>400</span>
        </h1>
        <h1>
          Percentage : <span>90%</span>
        </h1>
      </div> */}
    </div>
  );
}

export default ViewResult;
