import React from 'react';

const PhoneGif = () => {
    return (
        <div className="phone-container">
            <img src={"img/logos.png"} alt="logos" className="logos" />
            <img src={"img/call-me.gif"} alt="Call-Me" />
            <address>
                <a href="mailto:olivierraude@gmail.com" className="hover">olivierraude@gmail.com</a>
                <a href="tel:4389348144" className="hover">438-934-8144</a>
            </address>
        </div>
    );
};

export default PhoneGif;