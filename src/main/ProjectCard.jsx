import './ProjectCard.css'

function ProjectCard({ project, linkToActual })
{
    return (
        <div id={project.id}>
            <a className="project" href={linkToActual ? project.link : `/${project.id}`}
                target={linkToActual ? "_blank" : ""}>
                <div className="imageHolder">
                    <img src={`projects/${project.id}/primary.jpg`}></img>
                </div>
                <h4 className="title">
                    {project.name}
                    <p className='duration'>{project.duration}</p>
                </h4>
                <p className="description">{project.description}</p>
                {
                    linkToActual && !project.link ?
                        null :
                        <div className="button">
                            {linkToActual ? 'Link To Project' : 'Check It Out'}
                        </div>
                }
            </a>
        </div>
    );
};

export default ProjectCard