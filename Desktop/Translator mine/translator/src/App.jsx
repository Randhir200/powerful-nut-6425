import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './components/Navbar'
import Box from './components/Box'
import Homepage from './components/Homepage'
import func from './test'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div id='container'>
<Homepage/> 

</div>
<h2>Made by Saurav 💜</h2>
</>
  )
}

export default App
