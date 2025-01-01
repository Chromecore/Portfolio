import './About.css'
import './AboutImages.css'
import MailIcon from '../assets/icons/mail'
import ArrowIcon from '../assets/icons/arrow'
import ResumeIcon from '../assets/icons/resume'
import iconsImage from '../assets/images/icons.png'

const projectIDs = [
    'hazardMiner',
    'ignitionArena',
    'budgetized',
    'stellarWinds',
    'theFlipSide',
    'pigments',
]

function About()
{
    return (
        <section className='aboutParent'>
            <div className='about'>
                {/* Images */}
                <div className='images'>
                    {
                        projectIDs.map((id, index) =>
                            <div className='projectImage' key={index}>
                                <a href={`/${id}`} className={`image${index}`}>
                                    <img src={`projects/${id}/primarySized.jpg`} alt={`Primary ${id} image`} />
                                </a>
                            </div>
                        )
                    }
                </div>

                {/* Intro */}
                <div className='intro'>
                    <div className="icons">
                        <img src={iconsImage} alt="" />
                    </div>
                    <div className="introContent">
                        <h2>Games/Software</h2>
                        <p>
                            <span>&#123;</span>
                            I program & design games, apps, websites
                            <span>&#125;</span></p>
                        <a href='https://drive.google.com/file/d/1AmegWO79QVZejVwYmzNuLmxkF4PsZZrg/view?usp=drive_link'
                            target='blank' className='resume'>
                            <ResumeIcon />
                            <span>Resume</span>
                        </a>
                        <a className='contactMe' href='#contact'>
                            <MailIcon />
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Explore Arrow */}
                <div className='explore explore1'>
                    <p>Explore</p>
                    <ArrowIcon />
                </div>
            </div>
        </section>
    )
}

export default About