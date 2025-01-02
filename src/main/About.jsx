import './About.css'
import './AboutImages.css'
import MailIcon from '../assets/icons/mail'
import ArrowIcon from '../assets/icons/arrow'
import ResumeIcon from '../assets/icons/resume'
import iconsImage from '../assets/images/icons.png'
import iconsImageWeb from '../assets/images/icons.webp'

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
                                <a href={`/${id}`} className={`image${index}`} aria-label={`Check out ${id}`}>
                                    <picture>
                                        <source
                                            type='image/webp'
                                            srcSet={`projects/${id}/primarySized.webp`}
                                        />
                                        <img fetchpriority="high" src={`projects/${id}/primarySized.jpg`} alt={`Primary ${id} image`} />
                                    </picture>
                                </a>
                            </div>
                        )
                    }
                </div>

                {/* Intro */}
                <div className='intro'>
                    <div className="icons">
                        <picture>
                            <source
                                type='image/webp'
                                srcSet={iconsImageWeb}
                            />
                            <img src={iconsImage} alt="" />
                        </picture>
                    </div>
                    <div className="introContent">
                        <h2>Games/Software</h2>
                        <p>
                            <span>&#123;</span>
                            I program & design games, apps, websites
                            <span>&#125;</span></p>
                        <a href='https://drive.google.com/file/d/1AmegWO79QVZejVwYmzNuLmxkF4PsZZrg/view?usp=drive_link'
                            target='blank' className='resume' aria-label='See my resume'>
                            <ResumeIcon />
                            <span>Resume</span>
                        </a>
                        <a className='contactMe' href='#contact' aria-label='Jump to the contact me section'>
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