import React from "react";
import './Projects.css'
import projectdata from '../data/projects.json';

function Projects()
{
    return (
        <div className="projectsSection" id='projects'>
            <h2>Projects</h2>
            <div className='projectCategories'>
                {
                    projectdata.projects.map((category, index) =>
                        <Category category={category} key={index} />
                    )
                }
            </div>
        </div>
    )
}

function Category({ category })
{
    return (
        <div className='category'>
            <h3>{category.name}</h3>
            <div className="projectList">
                {
                    category.projects.map((project, index) =>
                        <Project project={project} key={index} />
                    )
                }
            </div>
        </div>
    );
};

function Project({ project })
{
    return (
        <a className="project" href={`/${project.id}`}>
            <div className="imageHolder">
                <img src={`projects/${project.id}/01.png`}></img>
            </div>
            <h4 className="title">{project.name}</h4>
            <p className="description">{project.description}</p>
            <div className="button">
                Check It Out
            </div>
        </a>
    );
};

export default Projects