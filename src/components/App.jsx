//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import '../styles/App.css'
import WeatherPanel from './WeatherPanel';
import Footer from './Footer';



function App() {

  return (
    <>
    <div className='container'>
      <header className='header'>
        <h2 className='headerTitle'>Predicción Meteorológica</h2>
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
