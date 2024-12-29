import React from "react";
import GamesIcon from '../assets/icons/Games';
import WebIcon from '../assets/icons/web';
import AppsIcon from '../assets/icons/apps';
import GeneralIcon from '../assets/icons/general';
import './Skills.css'

const categories = [
    {
        name: 'Web', icon: <WebIcon />, skills: [
            { name: 'HTML', icon: 'icons/html.png' },
            { name: 'CSS', icon: 'icons/css.png' },
            { name: 'JavaScript', icon: 'icons/javaScript.png' },
            { name: 'React', icon: 'icons/react.png' },
            { name: 'Tailwind', icon: 'icons/tailwind.png' },
        ]
    },
    {
        name: 'Games', icon: <GamesIcon />, skills: [
            { name: 'Unity', icon: 'icons/unity.png' },
            { name: 'C#', icon: 'icons/csharp.png' },
            { name: 'GameMaker', icon: 'icons/gameMaker.png' },
            { name: 'World Building', icon: 'icons/world.png' },
            { name: 'Unity Netcode', icon: 'icons/unity.png' },
            { name: 'Blender', icon: 'icons/blender.png' },
            { name: 'Game Design', icon: 'icons/design.png' },
        ]
    },
    {
        name: 'Apps', icon: <AppsIcon />, skills: [
            { name: 'Flutter', icon: 'icons/flutter.png' },
            { name: 'Dart', icon: 'icons/dart.png' },
        ]
    },
    {
        name: 'General', icon: <GeneralIcon />, skills: [
            { name: 'Git', icon: 'icons/git.png' },
            { name: 'Photoshop', icon: 'icons/photoshop.png' },
            { name: 'Math/Physics', icon: 'icons/math.png' },
            { name: 'Java', icon: 'icons/java.png' },
            { name: 'Python', icon: 'icons/python.png' },
            { name: 'My SQL', icon: 'icons/mysql.png' },
            { name: 'C++', icon: 'icons/cpp.png' },
        ]
    },
]

function Skills()
{
    return (
        <div className="skillsSection" id='skills'>
            <h2>Skills</h2>
            <div className='categoryList'>
                {
                    categories.map((category) =>
                        <Category category={category} />
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
            {category.icon}
            <h3>{category.name}</h3>
            <div className="skillsList">
                {
                    category.skills.map((skill) =>
                        <Skill skill={skill} />
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
            <img src={skill.icon}></img>
            <p>{skill.name}</p>
        </div>
    );
};

export default Skills