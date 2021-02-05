import React from 'react';

const PhoneGif = () => {

    return (
        <div className="phone-container">
            <img src={"img/logos.png"} alt="Groupe de logos des langages informatiques" className="logos" />
            <img src={"img/call-me.gif"} alt="Singe au téléphone" />
            <address>
                <a href="mailto:olivierraude@gmail.com" className="hover mail">olivierraude@gmail.com</a>
                <a href="tel:4389348144" className="hover phone">438-934-8144</a>
            </address>
        </div>
    );
};

export default PhoneGif;