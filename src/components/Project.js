import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';

const Project = (props) => {

    const [currentProject] = useState(projectsData);
    const project = currentProject[props.projectNumber]

    console.log(project.image);
    return (
        <div className="project-main">
            <div className="project-content">
                <h2>{project.titre}</h2>
                <h3>{project.categorie}</h3>

                <ul className="languages">
                    {project.languages.map((item) => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </div>
            <div className="img-content">
                <div className="img-container hover">
                    <span>
                        <h3>{project.titre}</h3>
                        <p>{project.description}</p>
                    </span>
                    <img src={project.image} alt={project.titre} />
                </div>
            </div>
        </div>
    );
};

export default Project;