import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div className='flex flex-col items-center  gap-9'>
      <h2 className='font-extrabold text-[32px] text-center mt-16'>
        <span className='text-[#123456]'>Discover Your Next Adventure with AI: </span><br/>Personalized Iteraries at Your Fingertips     
      </h2>
      <p className="text-center text-l text-gray-500 ">Your personal trip planner and travel ourator,creating custom itineraries tailored to your intersts and budget.</p>
      <Link to={'/create-trip'}>
      <Button>Explore🌍</Button>
      </Link>
    </div>
  )
}

export default Hero