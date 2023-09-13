import React from 'react';
import './Home.css';
import Image from '../Image/Image';
import About from '../About/About'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <div className='container-color-one'>
      <h1 className='logo'>THABI.</h1>
      <About />
      <Image />
      {/* <Contact/> */}
    </div>
  )
}

export default Home
