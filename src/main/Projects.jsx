import React from "react";
import './Projects.css'
import projectdata from '../data/projects.json';
import GamesIcon from '../assets/icons/games';
import GeneralIcon from '../assets/icons/general';
import OtherIcon from '../assets/icons/other';

const iconMap = {
    "Games": <GamesIcon />,
    "Software": <GeneralIcon />,
    "Other": <OtherIcon />,
};

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

function DynamicIcon({ name })
{
    const icon = iconMap[name];
    if (!icon) return null;
    return icon;
}

function Category({ category })
{
    return (
        <div className='category'>
            <div className="title">
                <DynamicIcon name={category.name} />
                <h3>{category.name}</h3>
            </div>
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
        <div>
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
        </div>
    );
};

export default Projects