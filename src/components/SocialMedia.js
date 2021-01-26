import React from "react";

const anim = () => {
  let navlinks = document.querySelectorAll(".social-network li");

  navlinks.forEach((link) => {
    link.addEventListener("mouseover", (e) => {
      let attrX = e.offsetX - 20;
      let attrY = e.offsetY - 13;

      link.style.transform = `translate(${attrX}px, ${attrY}px)`;
    });
    link.addEventListener("mouseleave", () => {
      link.style.transform = "";
    });
  });
};

const SocialMedia = () => {
  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://www.linkedin.com/in/olivierraude/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i class="fab fa-linkedin-in"></i>
          </li>
        </a>
        <a
          href="https://github.com/olivierraude"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i class="fab fa-github"></i>
          </li>
        </a>
        <a
          href="https://codepen.io/oRaude"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i class="fab fa-codepen"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialMedia;
