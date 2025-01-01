import { useParams, Navigate } from "react-router-dom";
import './ProjectPage.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ProjectCard from './ProjectCard.jsx'
import projectdata from '../data/projects.json';

function ProjectPage()
{
    const { projectID } = useParams();
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

    return (
        <div className='projectsPage'>
            <Header />
            <div className='projectContent'>
                <div className='projectParent'>
                    <ProjectCard project={project} linkToActual={true} />
                    <a href={`/#${project.id}`} className="backButton">Back</a>
                </div>
                <div className="mainProjectContent">
                    <div className='descriptionColumn'>
                        {
                            project.descriptionLong && <>
                                <h2>Description</h2>
                                <p>{project.descriptionLong}</p>
                            </>
                        }
                        {
                            project.credits.length > 0 && <>
                                <h2>Credits</h2>
                                <ul>
                                    {
                                        project.credits.map((name) => (
                                            <li key={name}>{name}</li>
                                        ))
                                    }
                                </ul>
                            </>
                        }
                        <h2>Tools</h2>
                        <div className="toolsList">
                            {
                                project.tools.map((tool, index) => (
                                    <img src={`icons/${tool}.png`} key={index} alt={`${tool} Icon`} />
                                ))
                            }
                        </div>
                        {
                            project.sections.map((section, index) => (
                                <div key={index}>
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
                                    <img src={`projects/${project.id}/screenshots/${i}.jpg`}
                                        alt={`Screenshot number ${index} of ${project.name}`} />
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