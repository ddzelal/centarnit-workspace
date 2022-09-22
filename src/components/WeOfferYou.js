import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function WeOfferYou() {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className='weofferyou-container'>
    <div className='weofferyou-left'>
    <div className='weofferyou-h1'>
    <h1>Automatically Find Your Perfect Office</h1>
    </div>
    <div className='weofferyou-p'>
    <p>
    Locate articles and breaking news headlines from news sources and blogs across the web with our JSON API
    </p>
    </div>
    <div className='container-items-weofferyou'>
    <div className='items-container'>
        <div className='items-number'>
          <h1 data-aos="flip-left">21</h1>
        </div>
        <div className='items-text'>
          <h6>Thinkers Sef</h6>
          <h6>Find Sed</h6>
        </div>
        <div className='items-number'>
          <h1 data-aos="flip-left">21</h1>
        </div>
        <div className='items-text'>
          <h6>Thinkers Sef</h6>
          <h6>Find Sed</h6>
        </div>
        <div className='items-number'>
          <h1 data-aos="flip-left">21</h1>
        </div>
        <div className='items-text'>
          <h6>Thinkers Sef</h6>
          <h6>Find Sed</h6>
        </div>
    </div>

    </div>

    </div>
    <div className='weofferyou-right'>
    <div className='image-one-container'>
    <img data-aos="fade-left" className='image-one' alt='workingSpace' src='https://www.wework.com/ideas/wp-content/uploads/sites/4/2020/08/Web_150DPI-20150206_WeWork_Covid-Response_041_twitter.jpg'></img>
    </div>

    </div>

    </div>
  )
}

export default WeOfferYou