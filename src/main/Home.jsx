import './Home.css'
import Header from './Header.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Skills from './Skills.jsx'
import Experiences from './Experience.jsx'
import Projects from './Projects.jsx'
import Footer from './Footer.jsx'

function Home({ success, error })
{
    return (
        <div className='home'>
            <Header />
            <main>
                <About />
                <div className='spacer' />
                <Skills />
                <div className='spacer' />
                <Experiences />
                <div className='spacer' />
                <Projects />
                <div className='spacer' />
                <Contact success={success} error={error} />
            </main>
            <Footer />
        </div>
    )
}

export default Home