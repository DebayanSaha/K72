import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[lausanne300] mt-56 lg:mt-0 pt-3 text-center'>
        <div className='lg:text-[9.5vw] text-[12vw] uppercase text-zinc-50 lg:leading-[9.5vw] leading-[10vw] justify-center flex items-center'>
            The spark for
        </div>
        <div className='lg:text-[9.5vw] text-[12vw] uppercase text-zinc-50 lg:leading-[9.5vw] leading-[10vw] justify-center flex items-center'>
            all 
            <div className='lg:h-[15vh] h-[5vh] w-[16vw] lg:-mt-5 -mt-2 rounded-full overflow-hidden border-0.5 border-zinc-900'>
                <Video />
            </div>
            things
        </div>
        <div className='lg:text-[9.5vw] text-[12vw] uppercase text-zinc-50 lg:leading-[9.5vw] leading-[10vw] justify-center flex items-center'>
            creative
        </div>
    </div>
  )
}

export default HomeHeroText