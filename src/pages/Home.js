import React from "react";
import Nav from "../components/Nav";
import SocialMedia from "../components/SocialMedia";

const Home = () => {
  return (
    <main>
      <Nav />
      <SocialMedia />
      <div className="main-content">
        <div className="title">
          <h1>OLIVIER RAUDE</h1>
        </div>
      </div>
    </main>
  );
};

export default Home;
