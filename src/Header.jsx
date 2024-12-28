import { useState } from 'react'
import profilePicture from './assets/images/profile-picture.png'
import './Header.css'
import AboutIcon from './assets/icons/about'
import SkillsIcon from './assets/icons/skills'
import ProjectsIcon from './assets/icons/projects'
import ContactIcon from './assets/icons/contact'
import ResumeIcon from './assets/icons/resume'

function Header()
{
  const [count, setCount] = useState(0)

  const navItems = [
    { name: 'About', icon: <AboutIcon />, link: '' },
    { name: 'Skills', icon: <SkillsIcon />, link: '' },
    { name: 'Projects', icon: <ProjectsIcon />, link: '' },
    { name: 'Contact', icon: <ContactIcon />, link: '' },
    { name: 'Resume', icon: <ResumeIcon />, target: 'blank', link: 'https://drive.google.com/file/d/1AmegWO79QVZejVwYmzNuLmxkF4PsZZrg/view?usp=drive_link' }
  ]

  return (
    <div className='header'>

      {/* Picture */}
      <a href="">
        <img src={profilePicture} className="profilePic" alt="Profile Picture" />
      </a>

      {/* Hello */}
      <div className='hello'>
        <h1>Hey,</h1>
        <h1>I'm<span>Tayin</span></h1>
      </div>

      {/* Nav Items */}
      <nav>
        {
          navItems.map((navItem) =>
            <a href={navItem.link} target={navItem.target} className='navItem' key={navItem.name}>
              {navItem.icon}
              <span>{navItem.name}</span>
            </a>
          )
        }
      </nav>
    </div>
  )
}

export default Header