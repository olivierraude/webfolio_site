import React from "react";
import Mouse from "../components/Mouse";
import Nav from "../components/Nav";
import ScrollButton from "../components/ScrollButton";
import SocialMedia from "../components/SocialMedia";

const Home = () => {
  return (
    <main>
      <Mouse />
      <div className="home">
        <Nav />
        <SocialMedia />
        <div className="main-content">
          <div className="title">
            <h1>OLIVIER RAUDE</h1>
            <p>Développeur Front-End</p>
          </div>
        </div>
        <ScrollButton right="/project-1"/>
      </div>
    </main>
  );
};

export default Home;
