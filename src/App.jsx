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
    </div>
  )
}

export default App