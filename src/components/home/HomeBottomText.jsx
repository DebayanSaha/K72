import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[lausanne500] flex items-center justify-center gap-5 pb-2'>
      <p className='font-[lausanne300] absolute text-white lg:w-80 w-70 lg:text-lg text-sm right-2 lg:bottom-40 bottom-20 lg:leading-relaxed'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p>
      <div className='hover:border-[rgb(211,253,80)] hover:text-[#D3FD50] lg:h-32 lg:border-3 border-2 leading-[5.5vw] text-white border-white rounded-full lg:px-10 px-3 lg:pt-6 pt-1 uppercase'>
        <Link className='text-[6vw]  lg:mt-6' to='/projects'>Work</Link> 
      </div>
      <div className='hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-32 lg:border-3 border-2 leading-[5.5vw] text-white border-white rounded-full lg:px-10 px-3 lg:pt-6 pt-1 uppercase'>
        <Link className='text-[6vw] mlg:t-6' to='/agence'>Agency</Link>
      </div>
        
        
    </div>
  )
}

export default HomeBottomText