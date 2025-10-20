import React from 'react'
import "../styles/hero.css"
import Azimi from "../../src/assets/Azimi-koko.png"

const Hero = () => {
  return (
    <>
      <section className='hero-section'>
        <div className='hero-section1'>
            <h1>Welcome to Azimi Koko’s world — where ideas, books, and innovation meet purpose.</h1>
        </div>


        <div className='hero-img'>
            <img src={Azimi} alt="" />
        </div>
      </section>
      <br /><br />
    </>
  )
}

export default Hero