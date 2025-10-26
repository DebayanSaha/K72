import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import gsap, { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Projects = () => {
  
  const projects = [
    {
    image1:"/projectPics/image1.png" , 
    image2:"/projectPics/image2.png"
  },{
    image1:"/projectPics/image3.png", 
    image2:"/projectPics/image4.png"
  },{
    image1:"/projectPics/image5.png",
    image2:"/projectPics/image6.png"
  },{
    image1:"/projectPics/image7.png" , 
    image2:"/projectPics/image8.png"
  },{
    image1:"/projectPics/image9.png" , 
    image2:"/projectPics/image10.png"
  },{
    image1:"/projectPics/image11.png" , 
    image2:"/projectPics/image12.png"
  },{
    image1:"/projectPics/image13.png" , 
    image2:"/projectPics/image14.png"
  },{
    image1:"/projectPics/image15.png" , 
    image2:"/projectPics/image16.png"
  }];

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.from('.hero',{
      height: 0,
      stagger:{
        amount:0.2
      },
      scrollTrigger:{
        trigger: '.lol',
        start:'top 100%',
        end: 'top -150%',
        scrub: true,      
      }
    })
  })

  return (
    <div className="lg:p-4 p-2">
      <div className="lg:pt-[15vw] pt-[60vw]">
        <h2 className="font-[lausanne500] text-[20vw] lg:text-[12vw] uppercase ">work<sup className="text-3xl">16</sup></h2>
      </div>
      <div className="lg:-mt-16 lol ">
        {projects.map(function(elem,idx){
          return <div key={idx} className='hero w-full lg:h-[600px]  mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2}/>
          </div>
        })}
      </div>
    </div>
  );
};

export default Projects;
