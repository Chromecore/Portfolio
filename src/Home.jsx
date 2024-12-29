import Header from './Header.jsx'
import About from './about/About.jsx'
import Contact from './contact.jsx'

function Home({ success, error })
{
    return (
        <div>
            <Header />
            <About />
            <div className='spacer' />
            <Contact success={success} error={error} />
        </div>
    )
}

export default Home