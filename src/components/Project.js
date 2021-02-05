import React, { useState } from "react";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";

const Project = (props) => {

  const [currentProject] = useState(projectsData);
  const project = currentProject[props.projectNumber];

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 400,
    },
    visible: { 
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 0.35 },
      x: -800,
    }
  };

  // random img pop
  let plusMinus = Math.random() > 0.4 ? 1 : -1;
  let imgX = Math.random() * 350 * plusMinus;
  let imgY = Math.random() * 120 * plusMinus;

  const imgAnim = {
    initial: {
      opacity: 0,
      x: imgX,
      y: imgY,
    },
    visible: { 
      opacity: 1,
      x: 0,
      y: 0,
    }
  }

  const transition = {
    ease: [.03,.87,.73,.9],
    duration: .6,
  }

  return (
    <motion.div
      className="project-main"
      initial="initial"
      animate="visible"
      exit="exit"
      transition={transition}
      variants={variants}
    >
    <div className="project-content">
        <h2>{project.titre}</h2>
        <p>{project.categorie}</p>

        <ul className="languages">
            {project.languages.map((item) => {
                return <li key={item}>{item}</li>
            })}
        </ul>
    </div>
    <motion.div 
        className="img-content"
        initial="initial"
        animate="visible"
        variants={imgAnim}
        transition={{ duration: 1.2 }}
    >
        <div className="img-container">
            <span>
                <h3>{project.titre}</h3>
                <p className="para">{project.description}</p>
            </span>
            <img src={project.image} alt={project.alternative} width={project.width} height={project.height} className="img" />
        </div>
    </motion.div>
    <div className="project-links">
        <ul className="content">
            <a
            href={project.lien}
            target="_blank"
            rel="noopener noreferrer"
            className="hover"
            >
            <li>
                <i className="fas fa-globe"></i>
            </li>
            </a>
            <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover"
            >
            <li>
                <i className="fab fa-github"></i>
            </li>
            </a>
        </ul>
    </div>
    </motion.div>
    );
};

export default Project;