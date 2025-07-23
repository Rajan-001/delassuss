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
    y:-250
    })
 
    
    gsap.to("#Image4",{
     y:-800,
     scrollTrigger: {
         trigger: '#Section2',
         start: '50px 60px',
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

  return (<section className={`overflow-hidden `} style={{ backgroundColor: "#f7987c" }}>
   
    <div className=' w-screen h-screen relative ' id='Box'>

    <div  className="top-10 left-10 fixed z-40">
    <SVGComponent/>
    </div> 

<div className="relative top-20 sm:top-28 md:top-52 px-4 sm:px-6 md:px-0 sm:left-12 md:left-30">
  <div className="text-white w-full sm:w-4/5 md:w-[28rem] leading-relaxed">
    <p className="text-sm uppercase tracking-wide text-gray-200">Products</p>
    <p className="text-2xl sm:text-3xl md:text-4xl font-semibold my-4">Snacking tomatoes</p>
    <p className="text-base sm:text-lg">
      Duroc offers 24 varieties of exquisite snacking tomatoes all year round. <br />
      Duroc's concept of "collections” is famous, especially in Russia. This concept
      structures the varietal offer into 5 collections: Notorious, Sun pops, Lolly Pops,
      Pop Star and Delicates. <br /> For more details, download the brochure.
      <br /><strong>Visit Duroc</strong>
    </p>
  </div>
</div>

<div
  className="absolute top-0 right-4 sm:right-12 md:right-36 w-full sm:w-[26rem] md:w-[35rem] h-[28rem] sm:h-[34rem] md:h-[38rem] rounded-4xl bg-transparent xl:bg-[#e7524c]"
>
  <div className="relative w-full h-full">
    <Image
      unoptimized
      src={images.tomatos.Tomatos_1}
      alt="Tomatos_Image_1"
      className="sm:w-24 w-16 md:w-44 xl:w-60 absolute top-12 sm:top-20 right-4 sm:right-8 z-12"
      id="Image2"
    />
    <Image
      unoptimized
      src={images.tomatos.Tomatos_2}
      alt="Tomatos_Image_2"
      className="sm:w-28 w-14 md:w-44 xl:w-60 absolute top-[18rem] sm:top-[22rem] right-0 sm:-right-8 z-10"
      id="Image3"
    />
    <Image
      unoptimized
      src={images.tomatos.Tomatos_3}
      alt="Tomatos_Image_3"
      className="sm:w-32 w-24 md:w-48 xl:w-70 absolute top-[16rem] left-2 sm:left-4 z-10"
      id="Image1"
    />
  </div>
</div>


    </div>
   
    <div
  className={`w-screen h-[100vh] overflow-hidden relative flex `}
  style={{
    backgroundColor: "#f7be00",
  }}
>
  <video
    src="/assests/Videos/Boucle_Grapes.mp4"
    className="w-full h-full object-fill"
    autoPlay
    loop
    muted
    playsInline
  />
</div>

    <div id='Section2'>
    <div className=" relative overflow-y-hidden overflow-x-hidden">
             <div className=" w-screen flex items-center justify-center h-screen text-white  ">


                <div className="w-120 text-center leading-10 text-xl  ">
                    <h1 className='text-4xl'>Customers' preffered varieties</h1>
                    <p className='mt-8'>
                      
                    Number 1 grape supplier from Morocco<br/>
                  </p>
                  <p className='mt-8'>
                  2,000t exported from Mid-May until the first week of August
                  </p>
                  <p className='mt-2'>
                  White: Sugarone®, early sweet®, Ivory TM
                  </p>
                  <p className='mt-2'>
                  Red: Passion Fire TM, TimcoTM, Sonera ®R Black: Midnight beauty®, Sable®, Mystic Dream TM
                  </p>
                  <p className='mt-20'>The packing station dedicated to grapes is in the heart of the orchard Primary markets: England and Germany.</p>
                  <br/>
                   
                </div>
                <div className='absolute left-4 bottom-2 w-80'>
                <Image unoptimized src={images.tomatos.Tomatos_3} alt='Avacodos image' id="Image4"/>
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

  <div className='relative h-[70vh]'>
  <div className='z-24 absolute mt-16' >
 
   <ProductDescription />
   
   <div className='w-screen h-[70vh] absolute top-20 z-0 mt-8 ' style={{backgroundColor:"#9f2400"}}></div>
    </div>
    </div>

  
</section>
)

}

