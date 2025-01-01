import React from "react";
import './Projects.css'
import projectdata from '../data/projects.json';
import GamesIcon from '../assets/icons/games';
import GeneralIcon from '../assets/icons/general';
import OtherIcon from '../assets/icons/other';
import ProjectCard from "./ProjectCard";

const iconMap = {
    "Games": <GamesIcon />,
    "Software": <GeneralIcon />,
    "Other": <OtherIcon />,
};

function Projects()
{
    return (
        <section className="projectsSection" id='projects'>
            <h2>Projects</h2>
            <div className='projectCategories'>
                {
                    projectdata.projects.map((category, index) =>
                        <Category category={category} key={index} />
                    )
                }
            </div>
        </section>
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
                <div className="projectListSpacer"></div>
                {
                    category.projects.map((project, index) =>
                        <ProjectCard project={project} key={index} />
                    )
                }
                <div className="projectListSpacer"></div>
            </div>
        </div>
    );
};

export default Projects