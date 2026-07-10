import React from "react";
import './Projects.css'
import projectdata from '../data/projects.json';
import ExperienceIcon from '../assets/icons/experience';
import WorkIcon from '../assets/icons/work';
import AboutIcon from '../assets/icons/about';
import ProjectCard from "./ProjectCard";

const iconMap = {
    "Work": <WorkIcon />,
    "School": <ExperienceIcon />,
    "Personal": <AboutIcon />,
};

function Projects()
{
    return (
        <section className="projectsSection reveal" id='projects'>
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