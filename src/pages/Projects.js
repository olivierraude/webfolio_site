import React from "react";
import Mouse from "../components/Mouse";
import Nav from "../components/Nav";
import Project from "../components/Project";
import ScrollButton from "../components/ScrollButton";
import SocialMedia from "../components/SocialMedia";

export const Project1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Nav />
        <SocialMedia />
        <Project projectNumber={0} />
        <ScrollButton left="/" right="/project-2" />
      </div>
    </main>
  );
};

export const Project2 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Nav />
        <SocialMedia />
        <Project projectNumber={1} />
        <ScrollButton left="/project-1" right="/project-3" />
      </div>
    </main>
  );
};

export const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Nav />
        <SocialMedia />
        <Project projectNumber={2} />
        <ScrollButton left="/project-2" right="/project-4" />
      </div>
    </main>
  );
};

export const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Nav />
        <SocialMedia />
        <Project projectNumber={3} />
        <ScrollButton left="/project-3" right="/contact" />
      </div>
    </main>
  );
};

/* export const Project5 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Nav />
        <SocialMedia />
        <Project projectNumber={4}/>
        <ScrollButton left="/project-4" right="/contact"/>
      </div>
    </main>
  );
}; */
