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
            opacity: 0,
            x: 200
        },
        visible:{
            opacity: 1,
            x:0
        },
        out: {
            opacity: 0,
            x: -800
        }
    }

    const transition = {
        ease: [.03,.87,.73,.9],
        duration: .6,
    }

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power1out" }});

        tl.to(".text", { y: "0%", duration: 2, delay: 1, stagger: .25})
    });
    
    return (
        <main>
            <Mouse />
            <AnimatePresence>
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
                                <span className="text">
                                fluides et jolies pour les yeux.
                                </span>
                            </p>
                            <p className="hide">
                                <span className="text">
                                Fan de design et d'équipe!
                                </span>
                            </p>
                        </div>
                    </div>
                    <PhoneGif />
                    {/* <IsoCards /> */}
                    <SocialMedia />
                    <ScrollButton left="/project-4"/>
                </motion.div>
            </AnimatePresence>
        </main>
    );
};

export default Contact;