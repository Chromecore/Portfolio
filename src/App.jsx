import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import About from './about/About.jsx'
import Contact from './Contact.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <About />
      <div className='spacer' />
      <Contact />
    </div>
  )
}

export default App