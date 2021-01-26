import React from "react";
import Nav from "../components/Nav";
import ScrollButton from "../components/ScrollButton";
import SocialMedia from "../components/SocialMedia";

export const Project1 = () => {
  return (
    <main>
      <Nav />
      <SocialMedia />
      <div classname="project">Projet 1</div>
      <ScrollButton left="/" right="/project-2"/>
    </main>
  );
};

export const Project2 = () => {
  return (
    <main>
      <Nav />
      <SocialMedia />
      <div classname="project">Projet 2</div>
      <ScrollButton left="/project-1" right="/project-3"/>
    </main>
  );
};

export const Project3 = () => {
  return (
    <main>
      <Nav />
      <SocialMedia />
      <div classname="project">Projet 3</div>
      <ScrollButton left="/project-2" right="/project-4"/>
    </main>
  );
};

export const Project4 = () => {
  return (
    <main>
      <Nav />
      <SocialMedia />
      <div classname="project">Projet 4</div>
      <ScrollButton left="/project-3" right="/project-5"/>

    </main>
  );
};

export const Project5 = () => {
  return (
    <main>
      <Nav />
      <SocialMedia />
      <div classname="project">Projet 5</div>
      <ScrollButton left="/project-4" right="/contact"/>
    </main>
  );
};
