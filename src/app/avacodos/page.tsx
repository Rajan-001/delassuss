"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import  { images } from "../../../public/products/Product";
import { useGSAP } from '@gsap/react';
import { ProductDescription } from '../../../public/products/components/ProductDescription';

import SVGComponent from '../../../public/assests/Svg/Svg.';

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,ScrollTrigger);

declare module "react" {
    interface CSSProperties {
      "--index"?: number;
    }
  }


export default function ProductsPage() {

  useGSAP(()=>{
    gsap.to("#Image1",{
     y:-130,
     scrollTrigger: {
         trigger: '#Box',
         start: '140px 140px',
         end: '+=600px',
         scrub: true,
       
       }
    })
    gsap.to("#Image2",{
     y:-130,
     scrollTrigger: {
         trigger: '#Box',
         start: '140px 140px',
         end: '+=600px',
         scrub: true,
       
       }
    })
    gsap.to("#Image3",{
     y:-130,
     scrollTrigger: {
         trigger: '#Box',
         start: '140px 140px',
         end: '+=600px',
         scrub: true,
       
       }
    })
    gsap.set("#Image4",{
    y:-600
    })
 
    
    gsap.to("#Image4",{
     y:100,
     scrollTrigger: {
         trigger: '#Section2',
         start: '440px 140px',
         end: '+=600px',
         scrub: true,
       
       }
    })
   
 
 }
 )



 const targetPosition = useRef({ x: 0, y: 0 });
 const currentPosition = useRef({ x: 0, y: 0 });

 useEffect(() => {
   const frameId = requestAnimationFrame(animationFrame);
   window.addEventListener("mousemove", onMouseMove);
   
   function onMouseMove(event) {
     const { innerWidth, innerHeight } = window;
     const xPercent = (event.clientX / innerWidth - 0.5) * 2; // Range between -1 and 1
     const yPercent = (event.clientY / innerHeight - 0.5) * 2; // Range between -1 and 1
     
     targetPosition.current = {
       x: xPercent * -20,
       y: yPercent * -20,
     };
   }

   function animationFrame() {
     const { x: targetX, y: targetY } = targetPosition.current;
     const { x: currentX, y: currentY } = currentPosition.current;
     
     const newX = currentX + (targetX - currentX) * 0.1;
     const newY = currentY + (targetY - currentY) * 0.1;
     
     currentPosition.current = { x: newX, y: newY };
 

     requestAnimationFrame(animationFrame);
   }
   
   return () => {
     window.removeEventListener("mousemove", onMouseMove);
     cancelAnimationFrame(frameId);
   };
 }, []);

  return (<section className={`overflow-x-hidden `} style={{ backgroundColor: "#03705a" }}>
    <div className=' w-screen h-screen relative ' id='Box'>

    <div  className="top-10 left-10 fixed">
    <SVGComponent/>
    </div> 

<div className="relative left-12 top-24 md:left-30 md:top-72">
  <div className="text-white w-11/12 sm:w-4/5 md:w-[30rem] leading-8 sm:text-center">
    <p className="text-sm uppercase tracking-wide z-20">Products</p>
    <p className="text-2xl md:text-3xl font-semibold my-4 z-20">Avocados</p>
    <p className='z-20'>
      The young farm planted by Delassus will reach its full capacity by 2025.
      The volume is expected to reach 2,000 tons and will be available from January to April.
    </p>
  </div>
</div>

<div
  className="absolute right-4 sm:right-20 md:right-36 top-4 rounded-4xl z-10 w-11/12 sm:w-[22rem] md:w-[36rem] h-[32rem] sm:h-[34rem] md:h-[38rem] bg-transparent  2xl:bg-green-200"
>
  <div className="relative w-full h-full">
    <Image
      unoptimized
      src={images.avocados.Img1}
      alt="Avocados_Image_1"
      className="w-32 sm:w-42 md:w-62 xl:w-84 absolute z-4 top-62 md:top-32 left-4 sm:left-8 sm:top-84 "
      id="Image1"
    />
    <Image
      unoptimized
      src={images.avocados.Img2}
      alt="Avocados_Image_2"
      className="w-24 sm:w-44 md:w-64 xl:w-84 absolute md:top-4 md:left-6 sm:left-10 z-10 top-62 left-32 sm:top-72"
      id="Image2"
    />
    <Image
      unoptimized
      src={images.avocados.Img3}
      alt="Avocados_Image_3"
      className="w-24 sm:w-52 md:w-72 xl:w-90 absolute top-44 right-0 sm:right-2 z-5 sm:top-62"
      id="Image3"
    />
  </div>
</div>



    </div>
   
    <div className={`w-screen h-[85vh] overflow-hidden relative flex justify-center items-center  bg-green-800`} >
      <video
        src="/assests/Videos/Boucle_Avocados.mp4"
        className="w-full h-full object-contain"
        autoPlay
        loop
        muted
        playsInline
      />
      
    </div>

    <div id='Section2'>
    <div className=" relative overflow-y-hidden overflow-x-hidden">
             <div className=" w-screen flex items-center justify-center h-screen text-white  ">


                <div className="w-96 text-center leading-10 text-xl  ">
                    <h1 className='text-4xl '>Varieties</h1>
                    <p >

                    Best variety of avocados <br/>
                    Main variety: Hass<br/>
                    Main market: UK<br/>
                    Deliveries in loose by counts to be ripened and ppacked at destination<br/>
                    Period: January to April.<br/>
                    The avocados are packed in a dedicated packhouse located on the farm, near Azemour.<br/>
                    </p>
                </div>
                <div className='absolute left-4 bottom-2 md:w-80 w-20 sm:w-24'>
                <Image unoptimized src={images.avocados.Img2} alt='Avacodos image' id="Image4"/>
            </div>     
             </div>
           
            <div className='w-screen h-screen  flex justify-center items-center text-white'>
            <div className=' text-center text-3xl leading-14'>
                <h1>Any Questions</h1>
                <p>Please do not hestitate to ask more information<br/>
                We will be happy to answer</p>
                <button className='rounded-4xl p-4 bg-pink-600 mt-8 text-2xl'>Contact Us</button>
                </div>


            </div>

   </div>
   <div>


   </div>
   </div>

  <div >
   <ProductDescription/>
    </div>
 

</section>
)

}

