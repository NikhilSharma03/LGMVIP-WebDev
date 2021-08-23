import React, { useState } from "react";
import "./ViewResult.css";
import InputField from "../../components/InputField/InputField";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

function ViewResult() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [classNum, setClassNum] = useState("");
  const [data, setData] = useState(null);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const dataBody = {
      name,
      rollNo: roll,
      className: classNum,
    };
    fetch("http://localhost:5000/api/marks/view", {
      method: "POST",
      body: JSON.stringify(dataBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resBody) => {
        if (resBody.message === "Result Found") {
          setData(resBody.result);
        }
        console.log(resBody);
      });
  };

  return (
    <div className="container">
      {!data ? (
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
      ) : (
        <div className="result">
          <h1 className="form__head">Result</h1>
          <h1>
            Name : <span>{data.student.name}</span>
          </h1>
          <h1>
            Math : <span>{data.math}</span>
          </h1>
          <h1>
            Science : <span>{data.science}</span>
          </h1>
          <h1>
            History : <span>{data.history}</span>
          </h1>
          <h1>
            Music : <span>{data.music}</span>
          </h1>
          <h1>
            Sum :{" "}
            <span>
              {parseInt(data.math) +
                parseInt(data.music) +
                parseInt(data.science) +
                parseInt(data.history)}
            </span>
          </h1>
          <h1>
            Total : <span>400</span>
          </h1>
          <h1>
            Percentage :{" "}
            <span>
              {(
                ((parseInt(data.math) +
                  parseInt(data.music) +
                  parseInt(data.science) +
                  parseInt(data.history)) /
                  400) *
                100
              ).toFixed(2)}
              %
            </span>
          </h1>
        </div>
      )}
    </div>
  );
}

export default ViewResult;
