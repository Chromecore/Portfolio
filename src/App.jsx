import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import About from './About.jsx'

function App()
{
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <About />
      <div className='spacer' />
    </div>
  )
}

export default App