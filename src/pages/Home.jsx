import React from 'react'
import Navbar from '../components/common/Navbar'
import TDS from '../components/TDS'
import Video from '../assets/video.mp4'

const Home = () => {
  return (
    <>

    <div>

      <div>

        <div className='absolute'>
        <video muted loop autoPlay className='w-full h-[100vh]'>
        <source src={Video} type="video/mp4"  />
      </video>
        </div>
     

      <div className='relative z-20' >  
       <Navbar/>
        {/*Bottle section*/}
        <div className=''>
        </div>
        {/*Section 1*/}
      </div>
      </div>
      </div>
    </>
  )
}

export default Home