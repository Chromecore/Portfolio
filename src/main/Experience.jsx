import React from "react";
import './Experience.css'
import experiencedata from '../data/experience.json';
import useTilt from '../useTilt.jsx';

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
    const { ref, onMouseMove, onMouseLeave } = useTilt({ maxAngle: 12, perspective: 500, scale: 1.08 })

    return (
        <a className="experience" ref={ref}
            aria-label={`${experience.name} experience`} role="listitem"
            href={experience.link} target="_blank" rel="noopener noreferrer"
            onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
            <img src={`experience/${experience.id}.png`} aria-hidden="true" alt="" />
            <p id={experience.name} aria-hidden="true">{experience.name}</p>
        </a>
    );
};

export default Experiences
