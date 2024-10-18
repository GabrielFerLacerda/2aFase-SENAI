import { useState } from 'react'
import './App.css'
import Navbar from './documents/componets/Navbar'
import HeroSection from './documents/Page/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='App'>
      <Navbar/>
      <HeroSection/>
     </div>
    </>
  )
}

export default App
