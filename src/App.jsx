import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Welcome from './Components/Welcome'
import Services from './Components/Services'
import WhyChoose from './Components/Whychoose'

function App() {

  return (
    <>
    <Navbar/>
    <Header/>
    <Welcome/>
    <Services/>
    <WhyChoose/>
    </>
  )
}

export default App
