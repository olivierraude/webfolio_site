import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const toggle = () => {
    const btnCircle = document.querySelector(".btn-circle");
    const circleMenu = document.querySelector(".circle-menu");

    btnCircle.classList.toggle("menu-anim");
    circleMenu.classList.toggle("circle-anim");
  };

  return (
    <div className="container-corner" onClick={toggle}>
      <div className="circle-menu">
        <ul>
          <NavLink
            to="/"
            exact
            className="links-circle hover"
            activeClassName="nav-active"
          >
            <li>Accueil</li>
          </NavLink>

          <li className="links-circle nav-portfolio">
            Portfolio
            <ul className="nav-projects">
              <NavLink
                to="/project-1"
                exact
                className="links-projects hover"
                activeClassName="nav-active"
              >
                <li>Projet 1</li>
              </NavLink>

              <NavLink
                to="/project-2"
                exact
                className="links-projects hover"
                activeClassName="nav-active"
              >
                <li>Projet 2</li>
              </NavLink>

              <NavLink
                to="/project-3"
                exact
                className="links-projects hover"
                activeClassName="nav-active"
              >
                <li>Projet 3</li>
              </NavLink>

              <NavLink
                to="/project-4"
                exact
                className="links-projects hover"
                activeClassName="nav-active"
              >
                <li>Projet 4</li>
              </NavLink>

              <NavLink
                to="/project-5"
                exact
                className="links-projects hover"
                activeClassName="nav-active"
              >
                <li>Projet 5</li>
              </NavLink>
            </ul>
          </li>

          <NavLink
            to="/contact"
            exact
            className="links-circle hover"
            activeClassName="nav-active"
          >
            <li>Me, Myself & I</li>
          </NavLink>
        </ul>
      </div>
      <div className="btn-circle">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Nav;
