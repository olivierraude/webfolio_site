import React from "react";
//import IsoCards from "../components/IsoCards";
import Mouse from "../components/Mouse";
import Nav from "../components/Nav";
import ScrollButton from "../components/ScrollButton";
import SocialMedia from "../components/SocialMedia";

const Contact = () => {
    return (
        <main>
            <Mouse />
            <Nav />
            <SocialMedia />
            {/* <IsoCards /> */}
            <ScrollButton left="/project-5"/>
        </main>
    );
};

export default Contact;