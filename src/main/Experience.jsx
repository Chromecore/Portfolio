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
                        <Experience experience={experience} key={experience.id} />
                    )
                }
            </div>
        </section>
    )
}

function Experience({ experience })
{
    const { levels } = experience
    const currentLevel = levels[levels.length - 1]
    const totalWeight = levels.reduce((sum, level) => sum + (level.weight || 1), 0)
    let cumulative = 0
    const nodePositions = [0, ...levels.map((level) =>
    {
        cumulative += level.weight || 1
        return (cumulative / totalWeight) * 100
    })]

    return (
        <a className="experience"
            aria-label={`${experience.name} experience`}
            href={experience.link} target="_blank" rel="noopener noreferrer">
            <img
                src={`experience/${experience.detailImage || `${experience.id}.png`}`}
                className={experience.detailImage ? 'detailImage' : undefined}
                aria-hidden="true" alt="" />
            <div className="experienceInfo">
                <p className="experienceName">{experience.name}</p>
                {
                    levels.length > 1 &&
                    <p className="experiencePosition">{currentLevel.title}</p>
                }
                <div className="levelBar">
                    <div className="levelTrack">
                        {
                            levels.map((level, index) => (
                                <div className="levelSegment"
                                    data-current={index === levels.length - 1}
                                    style={{ flexGrow: level.weight || 1 }}
                                    key={index} />
                            ))
                        }
                    </div>
                    {
                        nodePositions.map((position, index) => (
                            <div className="levelNode"
                                data-current={index === nodePositions.length - 1}
                                style={{ left: `${position}%` }}
                                key={index} />
                        ))
                    }
                </div>
                <div className="levelLabels">
                    {
                        levels.map((level, index) => (
                            <div className="levelLabel"
                                data-current={index === levels.length - 1}
                                style={{ flexGrow: level.weight || 1 }}
                                key={index}>
                                <span className="segmentTitle">{level.title}</span>
                                <span className="segmentDuration">{level.duration}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </a>
    );
};

export default Experiences
