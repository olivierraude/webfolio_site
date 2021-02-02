import React from "react";
//import IsoCards from "../components/IsoCards";
import Mouse from "../components/Mouse";
import Nav from "../components/Nav";
import PhoneGif from "../components/PhoneGif";
import ScrollButton from "../components/ScrollButton";
import SocialMedia from "../components/SocialMedia";
import { AnimatePresence, motion } from "framer-motion";

const Contact = () => {
    const variants = {
        in: {
            opacity: 1,
            x:0
        },
        out: {
            opacity: 0,
            x: 800
        }
    }

    const transition = {
        ease: [.03,.87,.73,.9],
        duration: .6,
    }
    
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