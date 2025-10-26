import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Agents = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const imageArray = [
    "/profilePics/image1.png",
    "/profilePics/image2.png",
    "/profilePics/image3.png",
    "/profilePics/image4.png",
    "/profilePics/image5.png",
    "/profilePics/image6.png",
    "/profilePics/image7.png",
    "/profilePics/image8.png",
    "/profilePics/image9.png",
    "/profilePics/image10.png",
    "/profilePics/image11.png",
    "/profilePics/image12.png",
    "/profilePics/image13.png",
    "/profilePics/image14.png",
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 33%",
        end: "top -100%",
        pin: true,
        pinSpacing: true,
        pinReparent:true,
        pinType:'transform',
        scrub: 1,
        anticipatePin:1,
        invalidateOnRefresh:true,
        onUpdate:(elem)=>{
          let imageIndex = Math.round((elem.progress * imageArray.length))
          if(imageIndex < 14){
            imageRef.current.src = imageArray[imageIndex];
          }
          else{
            imageRef.current.src = imageArray[13];
          }
        }
      },
    });
  });

  return (
    <div>
      <div className="section1 py-1 ">
        <div ref={imageDivRef} className="lg:h-[20vw] h-[30vw] lg:w-[15vw] w-[25vw] absolute lg:top-96 top-80 left-[30vw] lg:rounded-3xl rounded-xl overflow-hidden ">
          <img ref={imageRef} className="h-full w-full object-cover" src="/public/profilePics/image1.png" />
        </div>
        <div className="relative font-[lausanne500] ">
          <div className="lg:mt-[55vh] mt-[30vh]">
            <h1 className="text-[20vw] leading-[17vw] text-center">
              SEVEN7Y
              <br />
              TWO
            </h1>
          </div>
          <div className="lg:pl-[40%] p-4 mt-20">
            <p className="lg:text-5xl text-xl leading-tight">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              We’re inquisitive and open-minded, and we make sure creativity
              crowds out ego from every corner. A brand is a living thing, with
              values, a personality and a story. If we ignore that, we can
              achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agents;
