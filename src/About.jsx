import './About.css'
import ContactIcon from './assets/icons/contact'
import ArrowIcon from './assets/icons/arrow'
import ResumeIcon from './assets/icons/resume'
import iconsImage from './assets/images/icons.png'

function About()
{
    return (
        <div className='about'>
            {/* Images */}
            <div className='images'>

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
                        <ContactIcon />
                        Contact Me
                    </button>
                </div>
            </div>

            <div className='explore'>
                <ArrowIcon />
                Explore
            </div>
        </div>
    )
}

export default About