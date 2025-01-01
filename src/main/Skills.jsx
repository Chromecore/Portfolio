import React from "react";
import GamesIcon from '../assets/icons/games';
import WebIcon from '../assets/icons/web';
import AppsIcon from '../assets/icons/apps';
import GeneralIcon from '../assets/icons/general';
import './Skills.css'
import skillsdata from '../data/skills.json';

const iconMap = {
    "Web": <WebIcon />,
    "Games": <GamesIcon />,
    "Apps": <AppsIcon />,
    "General": <GeneralIcon />,
};

function Skills()
{
    return (
        <section className="skillsSection" id='skills'>
            <h2>Skills</h2>
            <div className='categoryList'>
                {
                    skillsdata.skills.map((category) =>
                        <Category category={category} key={category.name} />
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
            <DynamicIcon name={category.name} />
            <h3>{category.name}</h3>
            <div className="skillsList">
                {
                    category.skills.map((skill) =>
                        <Skill skill={skill} key={skill.name} />
                    )
                }
            </div>
        </div>
    );
};

function Skill({ skill })
{
    return (
        <div className="skill">
            <img src={`icons/${skill.id}.png`} aria-labelledby={`${skill.name}Skill`} />
            <p id={`${skill.name}Skill`}>{skill.name}</p>
        </div>
    );
};

export default Skills