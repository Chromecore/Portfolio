import { Link, useViewTransitionState } from 'react-router-dom'
import useTilt from '../useTilt.jsx'
import './ProjectCard.css'

function ProjectCard({ project, linkToActual })
{
    const { ref, onMouseMove, onMouseLeave } = useTilt({ maxAngle: 14, perspective: 700, scale: 1.03 })
    const path = `/${project.id}`
    const isTransitioning = useViewTransitionState(path)
    const style = isTransitioning ? { viewTransitionName: 'project-card' } : undefined

    const content = <>
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
    </>

    return (
        <div id={project.id}>
            {
                linkToActual ?
                    <a className="project" ref={ref} style={style}
                        href={project.link}
                        aria-label="Link to actual project"
                        target="_blank" rel="noopener noreferrer"
                        onMouseMove={onMouseMove}
                        onMouseLeave={onMouseLeave}>
                        {content}
                    </a> :
                    <Link className="project" ref={ref} style={style}
                        to={path} viewTransition state={{ fromApp: true }}
                        aria-label="Check out the project"
                        onMouseMove={onMouseMove}
                        onMouseLeave={onMouseLeave}>
                        {content}
                    </Link>
            }
        </div>
    );
};

export default ProjectCard
