import React from 'react'
import './About.css'
import { useEffect } from 'react'

function About(props) {

  const progressBarAbout = () => {
    props.setProgress(5)
    setTimeout(() => {
      props.setProgress(100)
    }, 200)
  }

  useEffect(() => {
    progressBarAbout()

  }, [])

  return (
    <>
      <div className='mainDivabout'>
        <div className="about-Section">
          <p> Hello!! I am about page.</p>
        </div>

      </div>
    </>
  )
}

export default About