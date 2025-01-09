import './ProjectCard.css'

function ProjectCard({ project, linkToActual })
{
    return (
        <div id={project.id}>
            <a className="project" href={linkToActual ? project.link : `/${project.id}`}
                aria-label={linkToActual ? "Link to actual project" : "Check out the project"}
                target={linkToActual ? "_blank" : ""}>
                <div className="imageHolder">
                    <picture>
                        <source
                            type='image/webp'
                            srcSet={`projects/${project.id}/primary.webp`}
                        />
                        <img src={`projects/${project.id}/primary.jpg`} alt={`Primary ${project.name} image`} />
                    </picture>
                </div>
                <div className="title">
                    {project.name}
                    <p className='duration'>{project.duration}</p>
                </div>
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