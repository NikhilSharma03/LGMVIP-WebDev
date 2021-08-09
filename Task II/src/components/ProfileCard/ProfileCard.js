import React from "react";
import "./ProfileCard.css";

function ProfileCard({ avatar, fname, lname, email }) {
  return (
    <div className="home__profile--card">
      <div className="home__profile--img__container">
        <img alt="avatar" src={avatar} />
      </div>
      <h1>
        {fname} {lname}
      </h1>
      <p>{email}</p>
    </div>
  );
}

export default ProfileCard;
