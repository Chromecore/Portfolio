import './Home.css'
import Header from './Header.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Footer from './Footer.jsx'

function Home({ success, error })
{
    return (
        <div className='home'>
            <Header />
            <About />
            <div className='spacer' />
            <Skills />
            <div className='spacer' />
            <Projects />
            <div className='spacer' />
            <Contact success={success} error={error} />
            <Footer />
        </div>
    )
}

export default Home