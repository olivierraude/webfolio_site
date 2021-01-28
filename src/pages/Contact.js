import React from "react";
//import IsoCards from "../components/IsoCards";
import Mouse from "../components/Mouse";
import Nav from "../components/Nav";
import PhoneGif from "../components/PhoneGif";
import ScrollButton from "../components/ScrollButton";
import SocialMedia from "../components/SocialMedia";

const Contact = () => {
    return (
        <main>
            <Mouse />
            <Nav />
            <PhoneGif />
            {/* <IsoCards /> */}
            <SocialMedia />
            <ScrollButton left="/project-5"/>
        </main>
    );
};

export default Contact;