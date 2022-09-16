import React from 'react'
import './Page.css'
function AboutUs() {
  return (
    <div>
    <div className='container-aboutus'>
    <div className='about-page-left'>
    <div className='about-h1-container'>
        <h1>Co-working Space</h1>
        <h1>For Creative</h1>
        <h1 className='about-h1'>Thinkers.</h1>
    </div>
    </div>
    <div className='about-page-right' >
    <div className='container-about-p'>
    <p>Sed ut prepricetesf unde emiste lete notus eror</p>
    <p>valwdk rorefoek, dwa sedod , tex , dd, prepricetesf unde emiste</p>
    <p>ram aperiam</p>
    </div>
    </div>
    </div>
    <div className='image-container-about'>
    <div className='h1-on-image'>
    <h1>99+</h1>
    <p>working Space</p>
    <h1>39</h1>
    <p>Roooms</p>
    </div>
    <img alt='about-us' className='img-workspace' src='https://jyskblueline.com/sites/jbl.com/files/inline-images/132267.jpg'></img>
    </div>
    </div>
  )
}

export default AboutUs;