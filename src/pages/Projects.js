import React from "react";
import Nav from "../components/Nav";
import Project from "../components/Project";
import ScrollButton from "../components/ScrollButton";
import SocialMedia from "../components/SocialMedia";

export const Project1 = () => {
  return (
    <main>
      <Nav />
      <SocialMedia />
      <Project projectNumber={0}/>
      <ScrollButton left="/" right="/project-2"/>
    </main>
  );
};

export const Project2 = () => {
  return (
    <main>
      <Nav />
      <SocialMedia />
      <Project projectNumber={1}/>
      <ScrollButton left="/project-1" right="/project-3"/>
    </main>
  );
};

export const Project3 = () => {
  return (
    <main>
      <Nav />
      <SocialMedia />
      <Project projectNumber={2}/>
      <ScrollButton left="/project-2" right="/project-4"/>
    </main>
  );
};

export const Project4 = () => {
  return (
    <main>
      <Nav />
      <SocialMedia />
      <Project projectNumber={3}/>
      <ScrollButton left="/project-3" right="/project-5"/>

    </main>
  );
};

export const Project5 = () => {
  return (
    <main>
      <Nav />
      <SocialMedia />
      <Project projectNumber={4}/>
      <ScrollButton left="/project-4" right="/contact"/>
    </main>
  );
};
