import './About.css'
import ContactIcon from './assets/icons/contact'
import ArrowIcon from './assets/icons/arrow'
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
                    <h2>Software/Games</h2>
                    <p>
                        <span>&#123;</span>
                        I program and design games, apps, websites
                        <span>&#125;</span></p>
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