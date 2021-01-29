import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { AnimatePresence, motion } from "framer-motion";

const Project = (props) => {

    const [currentProject] = useState(projectsData);
    const project = currentProject[props.projectNumber];

    const variants = {
        initial: {
          opacity: 0,
          transition: { duration: 0.5 },
          x: 200,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
        exit: {
          opacity: 0.4,
          transition: { duration: 0.35 },
          x: -500,
        }
      }

      let plusMinus = Math.random() < 0.4 ? 1 : -1;

      let imgX = Math.random() * 350 * plusMinus;
      let imgY = Math.random() * 120 * plusMinus;

    const imgAnim = {
        initial: {
            opacity: 0,
            x: imgX,
            y: imgY
          },
        visible: {
            opacity: 1,
            x: 0,
            y: 0
        }
    }

    return (
        <AnimatePresence>
        <motion.div 
            className="project-main"
            initial="initial"
            animate="visible"
            exit="exit"
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
                    <img src={project.image} alt={project.titre} className="img" />
                </div>
            </motion.div>
        </motion.div>
        </AnimatePresence>
    );
};

export default Project;