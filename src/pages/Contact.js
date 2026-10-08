import React, { useEffect } from "react";
//import IsoCards from "../components/IsoCards";
import Mouse from "../components/Mouse";
import Nav from "../components/Nav";
import PhoneGif from "../components/PhoneGif";
import ScrollButton from "../components/ScrollButton";
import SocialMedia from "../components/SocialMedia";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap/gsap-core";

const Contact = () => {
  const variants = {
    in: {
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

    tl.to(".text", { y: "0%", duration: 2, delay: 1, stagger: 0.25 });
  });

  return (
    <main>
      <Mouse />
      <AnimatePresence>
        <motion.div
          className="contact"
          exit="out"
          animate="in"
          initial="out"
          variants={variants}
          transition={transition}
        >
          <Nav />
          <div className="presentation">
            <div className="presentation-text">
              <p className="hide">
                <span className="text">TEST - Développeur web installé en Bretagne</span>
              </p>
              <p className="hide">
                <span className="text">après des années à Montréal.</span>
              </p>
              <p className="hide">
                <span className="text">Je suis en veille constante sur les internets,</span>
              </p>
              <p className="hide">
                <span className="text">du back-end aux animations fluides,</span>
              </p>
              <p className="hide">
                <span className="text">je code des applis solides et jolies pour les yeux.</span>
              </p>
              <p className="hide">
                <span className="text">Fan d'ergonomie et d'équipe!</span>
              </p>
            </div>
          </div>
          <PhoneGif />
          {/* <IsoCards /> */}
          <SocialMedia />
          <ScrollButton left="/project-8" />
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Contact;
