import React from "react";
import Mouse from "../components/Mouse";
import Nav from "../components/Nav";
import ScrollButton from "../components/ScrollButton";
import SocialMedia from "../components/SocialMedia";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {

const variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.5 },
    x: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
    x: -300
  }
};

  return (
    <main>
      <Mouse />
      <AnimatePresence>
        <motion.div 
          className="home"
          initial="initial"
          animate="visible"
          exit="exit"
          variants={variants}
        >
        <Nav />
        <SocialMedia />
        <div className="main-content">
          <div className="title">
            <h1>OLIVIER RAUDE</h1>
            <p>Développeur Front-End</p>
          </div>
        </div>
        <ScrollButton right="/project-1"/>
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Home;
