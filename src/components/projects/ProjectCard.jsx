import React from 'react'

const ProjectCard = (props) => {
  return (
    <>
        <div className='relative w-full lg:w-1/2 group h-full transition-all rounded-none hover:rounded-4xl overflow-hidden'>
            <img className='h-full w-full object-cover' src={props.image1} alt="" />
            <div className='absolute opacity-0 transition-all group-hover:opacity-100 top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center'>
              <h2 className='font-[lausanne500] text-6xl uppercase border-3 rounded-full pt-4 px-4 text-white border-white'>view project</h2>
            </div>
        </div>
        <div className='relative w-full lg:w-1/2 group h-full transition-all rounded-none hover:rounded-4xl overflow-hidden'>
            <img className='h-full w-full object-cover' src={props.image2} alt="" />
            <div className='absolute opacity-0 transition-all group-hover:opacity-100 top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center'>
              <h2 className='font-[lausanne500] text-6xl uppercase border-3 rounded-full pt-4 px-4 text-white border-white'>view project</h2>
            </div>
        </div> 
    </>
  )
}

export default ProjectCard