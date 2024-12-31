import { useParams } from "react-router-dom";
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
                        <h2>Description</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur fermentum elit vitae auctor. Sed eu augue ac ipsum varius consequat. Morbi risus nunc, laoreet a tortor vel, ullamcorper feugiat enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In elementum purus a arcu condimentum feugiat. Nullam at posuere dui, vitae efficitur nisl. Morbi sit amet nulla turpis. Integer id est est. Morbi vel placerat arcu, nec tincidunt tortor. Morbi vestibulum tristique vulputate. Phasellus consectetur, sapien eu rhoncus egestas, leo lectus finibus mauris, id maximus velit nibh a ipsum.</p>
                        <h2>Credits</h2>
                        <ul>
                            <li>First Last</li>
                            <li>First Last</li>
                            <li>First Last</li>
                            <li>First Last</li>
                            <li>First Last</li>
                            <li>First Last</li>
                            <li>First Last</li>
                        </ul>
                        <h2>Tools</h2>
                        <div className="toolsList">
                            <img src='icons/photoshop.png' />
                            <img src='icons/csharp.png' />
                            <img src='icons/unity.png' />
                            <img src='icons/blender.png' />
                            <img src='icons/git.png' />
                        </div>
                        <h2>Challenges</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur fermentum elit vitae auctor. Sed eu augue ac ipsum varius consequat. Morbi risus nunc, laoreet a tortor vel, ullamcorper feugiat enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In elementum purus a arcu condimentum feugiat. Nullam at posuere dui, vitae efficitur nisl. Morbi sit amet nulla turpis. Integer id est est. Morbi vel placerat arcu, nec tincidunt tortor. Morbi vestibulum tristique vulputate. Phasellus consectetur, sapien eu rhoncus egestas, leo lectus finibus mauris, id maximus velit nibh a ipsum.</p>
                    </div>
                    <div className='screenshots'>
                        <img src={`projects/${project.id}/01.png`} />
                        <img src={`Test1.png`} />
                        <img src={`Test2.png`} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProjectPage