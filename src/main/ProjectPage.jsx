import { useState } from "react";
import { useParams, Navigate, Link, useNavigate, useLocation } from "react-router-dom";
import './ProjectPage.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ProjectCard from './ProjectCard.jsx'
import projectdata from '../data/projects.json';

const SCREENSHOT_EXTENSIONS = ['webp', 'jpg', 'png']

function ScreenshotImage({ project, screenshot, index })
{
    const [extIndex, setExtIndex] = useState(0)

    if (extIndex >= SCREENSHOT_EXTENSIONS.length) return null

    return (
        <img
            src={`projects/${project.id}/screenshots/${screenshot}.${SCREENSHOT_EXTENSIONS[extIndex]}`}
            alt={`Screenshot number ${index} of ${project.name}`}
            onError={() => setExtIndex((i) => i + 1)} />
    )
}

function ProjectPage()
{
    const { projectID } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    let project = null;
    projectdata.projects.forEach(category =>
    {
        category.projects.forEach(tempProject =>
        {
            if (tempProject.id == projectID)
            {
                project = tempProject;
            }
        });
    });

    if (project == null) return <Navigate to="/404" />

    function handleBackClick(event)
    {
        event.preventDefault();
        if (location.state?.fromApp)
        {
            navigate(-1);
        } else
        {
            navigate(`/#${project.id}`, { viewTransition: true });
        }
    }

    return (
        <div className='projectsPage'>
            <Header />
            <div className='projectContent'>
                <div className='projectParent'>
                    <ProjectCard project={project} linkToActual={true} />
                    <Link to={`/#${project.id}`} viewTransition className="backButton"
                        onClick={handleBackClick}
                        aria-label="Return to home page">Back</Link>
                </div>
                <div className="mainProjectContent">
                    <div className='descriptionColumn'>
                        {
                            project.descriptionLong && <div className='infoSection'>
                                <h2>Description</h2>
                                <p>{project.descriptionLong}</p>
                            </div>
                        }
                        {
                            project.credits.length > 0 && <div className='infoSection'>
                                <h2>Credits</h2>
                                <div className='creditsList'>
                                    {
                                        project.credits.map((credit) =>
                                        {
                                            const [name, role] = credit.split(' - ')
                                            return (
                                                <div className='creditChip' key={credit}>
                                                    <span className='creditName'>{name}</span>
                                                    {role && <span className='creditRole'>{role}</span>}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        }
                        <div className='infoSection'>
                            <h2>Tools</h2>
                            <div className="toolsList">
                                {
                                    project.tools.map((tool, index) => (
                                        <img src={`icons/${tool}.png`} key={index} alt={`${tool} Icon`} />
                                    ))
                                }
                            </div>
                        </div>
                        {
                            project.sections.map((section, index) => (
                                <div className='infoSection' key={index}>
                                    <h2>{section.title}</h2>
                                    <p>{section.body}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='screenshots'>
                        {
                            project.screenshots.map((i, index) => (
                                <div key={index}>
                                    <ScreenshotImage project={project} screenshot={i} index={index}
                                        key={`${project.id}-${i}`} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProjectPage