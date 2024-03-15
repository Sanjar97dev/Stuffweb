import React from 'react'

import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Hero from './pages/hero/Hero'
import Home from './pages/home/Home'


const App = () => {
  return (
    <div className='app'>
      <div className="container">
        <Header/>
        <Home/>
        <Footer/>
      </div>
       
    </div>
  )
}

export default App