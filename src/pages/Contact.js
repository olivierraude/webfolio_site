import React from "react";
import Nav from "../components/Nav";
import IsoCards from "../components/IsoCards";
import ScrollButton from "../components/ScrollButton";
import SocialMedia from "../components/SocialMedia";

const Contact = () => {
    return (
        <main>
            <Nav />
            <IsoCards />
            <SocialMedia />
            Contact
            <ScrollButton left="/project-5"/>
        </main>
    );
};

export default Contact;