import React, { useEffect } from "react";
import Mouse from "../components/Mouse";
import Nav from "../components/Nav";
import ScrollButton from "../components/ScrollButton";
import SocialMedia from "../components/SocialMedia";
import { AnimatePresence, motion } from "framer-motion";
import gsap from 'gsap';

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

useEffect(() => {
const tl = gsap.timeline({ defaults: { ease: "power1.out" }});

tl.to(".titre", { y: "0%", duration: 2 });
tl.to(".texte", { y: "0%", duration: 1 }, "-=.75" );

});

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
            <h1 className="hide">
              <span className="title--big-text titre">OLIVIER RAUDE</span>
            </h1>
            <h3 className="hide">
              <span className="title--text texte">Développeur Front-End</span>
            </h3>
          </div>
        </div>
        <ScrollButton right="/project-1"/>
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Home;
