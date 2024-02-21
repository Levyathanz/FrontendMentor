import { useState } from 'react'
import './stylesheets/App.css'
import Navbar from './Navbar';
import Content from './Content'
import Footer from './Footer';
import Testimonals from './Testimonals';

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
