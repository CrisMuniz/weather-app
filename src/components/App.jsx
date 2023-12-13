//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import '../styles/App.css'
import WeatherPanel from './WeatherPanel';
import Footer from './Footer';
import imageHeader from '../images/nubes-y-sol.png';



function App() {

  return (
    <>
    <div className='container'>
      <header className='header'>
        <h2 className='headerTitle'>Predicción Meteorológica</h2>
        <div className='headerImg' >
        <a href="https://www.flaticon.es/iconos-gratis/nube-de-jotta" title="nube de jotta iconos" target='blank'><img className='hImg' src={imageHeader} alt="" /></a>
          
          </div>
      </header>
      <main>
     <WeatherPanel/>
     </main>
     <div className='footer'>
     <Footer/>
     </div>
    </div>
    </>
  )
}

export default App
