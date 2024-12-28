import './About.css'
import './AboutImages.css'
import MailIcon from '../assets/icons/mail'
import ArrowIcon from '../assets/icons/arrow'
import ResumeIcon from '../assets/icons/resume'
import iconsImage from '../assets/images/icons.png'

function About()
{
    const projectImages = [
        { id: 1, link: '' },
        { id: 2, link: '' },
        { id: 3, link: '' },
        { id: 4, link: '' },
        { id: 5, link: '' },
        { id: 6, link: '' }
    ]

    return (
        <div className='about'>
            {/* Images */}
            <div className='images'>
                {
                    projectImages.map((image) =>
                        <div className={`projectImage`} key={image.id}>
                            <a href={image.link} className={`image${image.id}`}>
                                <img src={`images/projectImage${image.id}.png`} alt={`Project Image ${image.id}`} />
                            </a>
                        </div>
                    )
                }
            </div>

            {/* Intro */}
            <div className='intro'>
                <div className="icons">
                    <img src={iconsImage} alt="Games and software related icons"></img>
                </div>
                <div className="introContent">
                    <h2>Games/Software</h2>
                    <p>
                        <span>&#123;</span>
                        I program and create games, apps, websites
                        <span>&#125;</span></p>
                    <a href='https://drive.google.com/file/d/1AmegWO79QVZejVwYmzNuLmxkF4PsZZrg/view?usp=drive_link'
                        target='blank' className='resume'>
                        <ResumeIcon />
                        <span>Resume</span>
                    </a>
                    <button >
                        <MailIcon />
                        Contact Me
                    </button>
                </div>
            </div>

            {/* Explore Arrow */}
            <div className='explore'>
                <ArrowIcon />
                Explore
            </div>
        </div>
    )
}

export default About