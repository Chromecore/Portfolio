import './Home.css'
import Header from './Header.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Skills from './Skills.jsx'

function Home({ success, error })
{
    return (
        <div className='home'>
            <Header />
            <About />
            <div className='spacer' />
            <Skills />
            <div className='spacer' />
            <Contact success={success} error={error} />
        </div>
    )
}

export default Home