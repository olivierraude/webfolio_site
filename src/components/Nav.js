import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div classname="nav">
      <ul>
        <NavLink to="/" exact classname="hover" activeClassName="nav-active">
          <li>Accueil</li>
        </NavLink>

        <li classname="nav-portfolio">
          Portfolio
          <ul classname="nav-projects">
            <NavLink
              to="/project-1"
              exact
              classname="hover"
              activeClassName="nav-active"
            >
              <li>Projet 1</li>
            </NavLink>

            <NavLink
              to="/project-2"
              exact
              classname="hover"
              activeClassName="nav-active"
            >
              <li>Projet 2</li>
            </NavLink>

            <NavLink
              to="/project-3"
              exact
              classname="hover"
              activeClassName="nav-active"
            >
              <li>Projet 3</li>
            </NavLink>

            <NavLink
              to="/project-4"
              exact
              classname="hover"
              activeClassName="nav-active"
            >
              <li>Projet 4</li>
            </NavLink>

            <NavLink
              to="/project-5"
              exact
              classname="hover"
              activeClassName="nav-active"
            >
              <li>Projet 5</li>
            </NavLink>
          </ul>
        </li>

        <NavLink
          to="/contact"
          exact
          classname="hover"
          activeClassName="nav-active"
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;
