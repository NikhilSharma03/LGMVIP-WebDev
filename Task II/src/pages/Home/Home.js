import React, { useState } from "react";
import "./Home.css";
import Header from "./../../components/Header/Header";
import ProfileCard from "./../../components/ProfileCard/ProfileCard";
import Loader from "./../../components/Loader/Loader";

function Home() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const dataFetchHandler = (page) => {
    setLoading(true);
    fetch("https://reqres.in/api/users?page=" + page)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData.data);
        setUserData((prev) => [...prev, ...resData.data]);
        setLoading(false);
      });
  };

  const fetchMoreHandler = () => {
    if (page < 2) {
      let currPage = parseInt(page);
      setPage(page + 1);
      dataFetchHandler(currPage + 1);
    }
  };

  return (
    <React.Fragment>
      {loading && <Loader />}
      <Header onClick={dataFetchHandler} />
      <section className="home">
        {userData.length > 0 && (
          <button onClick={fetchMoreHandler}>Fetch More Users</button>
        )}
        <div className="home__profile--container">
          {userData.length === 0 ? (
            <h1 className="default__text">
              Please Click Fetch User to Get Profiles
            </h1>
          ) : (
            userData.map((user) => {
              return (
                <ProfileCard
                  key={user.id}
                  email={user.email}
                  fname={user.first_name}
                  lname={user.last_name}
                  avatar={user.avatar}
                />
              );
            })
          )}
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
