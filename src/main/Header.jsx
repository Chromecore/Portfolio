import profilePicture from '../assets/images/profilePicture.png'
import './Header.css'
import AboutIcon from '../assets/icons/about'
import SkillsIcon from '../assets/icons/skills'
import ProjectsIcon from '../assets/icons/projects'
import MailIcon from '../assets/icons/mail'
import ResumeIcon from '../assets/icons/resume'

function Header()
{
  const navItems = [
    { name: 'About', icon: <AboutIcon />, link: '#about' },
    { name: 'Skills', icon: <SkillsIcon />, link: '#skills' },
    { name: 'Projects', icon: <ProjectsIcon />, link: '#projects' },
    { name: 'Contact', icon: <MailIcon />, link: '#contact' },
    { name: 'Resume', icon: <ResumeIcon />, target: 'blank', link: 'https://drive.google.com/file/d/1AmegWO79QVZejVwYmzNuLmxkF4PsZZrg/view?usp=drive_link' }
  ]

  return (
    <header id='about'>
      <div className='headerContent'>
        {/* Picture */}
        <a href="/">
          <img src={profilePicture} className="profilePic" alt="Profile Picture" />
        </a>

        {/* Hello */}
        <div className='hello'>
          <h2>Hey,</h2>
          <h1>I'm<span>Tayin</span></h1>
        </div>

        {/* Nav Items */}
        <nav>
          <ul>
            {
              navItems.map((navItem) =>
                <li key={navItem.name} className='navItem'>
                  <a href={navItem.link} target={navItem.target} className='navItem'>
                    {navItem.icon}
                    <span>{navItem.name}</span>
                  </a>
                </li>
              )
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header