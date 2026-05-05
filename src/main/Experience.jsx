import React from "react";
import './Experience.css'
import experiencedata from '../data/experience.json';

function Experiences()
{
    return (
        <section className="experienceSection reveal" id='experience'>
            <h2>Experience</h2>
            <div className='experienceList'>
                {
                    experiencedata.experiences.map((experience) =>
                        <Experience experience={experience} key={experience.name} />
                    )
                }
            </div>
        </section>
    )
}

function Experience({ experience })
{
    return (
        <a className="experience" aria-label={`${experience.name} experience`} role="listitem" href={experience.link} target="_blank" rel="noopener noreferrer">
            <img src={`experience/${experience.id}.png`} aria-hidden="true" alt="" />
            <p id={experience.name} aria-hidden="true">{experience.name}</p>
        </a>
    );
};

export default Experiences