import React from "react";
import Nav from "../components/Nav";
import ScrollButton from "../components/ScrollButton";
import SocialMedia from "../components/SocialMedia";

const Home = () => {
  return (
    <main>
      <Nav />
      <SocialMedia />
      <div className="main-content">
        <div className="title">
          <h1>OLIVIER RAUDE</h1>
          <p>Développeur Front-End</p>
        </div>
      </div>
      <ScrollButton right="/project-1"/>
    </main>
  );
};

export default Home;
