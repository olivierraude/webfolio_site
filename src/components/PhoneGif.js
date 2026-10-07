import React, { useEffect, useRef } from "react";

const PhoneGif = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    const fadeIn = setTimeout(() => {
      if (logoRef.current) {
        logoRef.current.classList.add("fade-in");
      }
    }, 5000);

    return () => clearTimeout(fadeIn);
  }, []);

  return (
    <div className="phone-container">
      <img
        ref={logoRef}
        src="img/logos.webp"
        alt="Groupe de logos des langages informatiques"
        className="logos"
      />
      <img src="img/call-me.gif" alt="Singe au téléphone" />
      <address>
        <a href="mailto:olivierraude@gmail.com" className="hover mail">
          olivierraude@gmail.com
        </a>
        <a href="tel:0675356615" className="hover phone">
          06-75-35-66-15
        </a>
      </address>
    </div>
  );
};

export default PhoneGif;
