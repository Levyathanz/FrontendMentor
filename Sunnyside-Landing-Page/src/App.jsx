import { useState } from 'react'
import './stylesheets/App.css'
import Navbar from './components/Navbar';
import Content from './components/Content'
import Footer from './components/Footer';
import Testimonals from './components/Testimonals';

function App() {

  return (
    <>
      <Navbar/>
      <Content/>
      <Testimonals/>
      <Footer/>
    </>
  )
}

export default App
