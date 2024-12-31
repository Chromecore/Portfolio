import './ProjectCard.css'

function ProjectCard({ project, linkToActual })
{
    return (
        <div id={project.id}>
            <a className="project" href={linkToActual ? project.link : `/${project.id}`}
                target={linkToActual ? "_blank" : ""}>
                <div className="imageHolder">
                    <img src={`projects/${project.id}/01.png`}></img>
                </div>
                <h4 className="title">{project.name}</h4>
                <p className="description">{project.description}</p>
                <div className="button">
                    {linkToActual ? 'Link To Game' : 'Check It Out'}
                </div>
            </a>
        </div>
    );
};

export default ProjectCard