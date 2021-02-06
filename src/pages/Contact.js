import React, { useEffect } from "react";
import Nav from "../components/Nav";
import PhoneGif from "../components/PhoneGif";
import ScrollButton from "../components/ScrollButton";
import SocialMedia from "../components/SocialMedia";
import { motion } from "framer-motion";
import gsap from "gsap/gsap-core";

const Contact = () => {
  const variants = {
    in: {
      opacity: 0,
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 800,
    },
  };

  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1out" } });

    tl.to(".text", { y: "0%", duration: 1, delay: 0.5, stagger: 0.25 });
  });

  return (
    <main>
      <motion.div
        className="contact"
        initial="in"
        animate="visible"
        exit="out"
        variants={variants}
        transition={transition}
      >
        <Nav />
        <div className="presentation">
          <div className="presentation-text">
            <p className="hide">
              <span className="text">
                Développeur Front-End Junior basé à Montréal.
              </span>
            </p>
            <p className="hide">
              <span className="text">
                Je suis en veille constante sur les internets
              </span>
            </p>
            <p className="hide">
              <span className="text">
                pour coder des applications aux animations
              </span>
            </p>
            <p className="hide">
              <span className="text">fluides et jolies pour les yeux.</span>
            </p>
            <p className="hide">
              <span className="text">Fan de design et d'équipe!</span>
            </p>
          </div>
        </div>
        <PhoneGif />
        {/* <IsoCards /> */}
        <SocialMedia />
        <ScrollButton left="/project-4" />
      </motion.div>
    </main>
  );
};

export default Contact;
