"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import  { images } from "../../../../public/products/Product";
import { useGSAP } from '@gsap/react';
import { ProductDescription } from '../../../../public/products/components/ProductDescription/ProductDescription';

import SVGComponent from '../../../../public/assests/Svg/Svg.';

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

    gsap.to("#Image2",{
     y:-130,
     scrollTrigger: {
         trigger: '#Box',
         start: '140px 140px',
         end: '+=600px',
         scrub: true,
         markers:true
       }
    })
    gsap.to("#Image3",{
     y:-130,
     scrollTrigger: {
         trigger: '#Box',
         start: '140px 140px',
         end: '+=600px',
         scrub: true,
         markers:true
       }
    })



    gsap.set("#Image4",{
    y:-900
    })
 
    
    gsap.to("#Image4",{
     y:80,
     scrollTrigger: {
         trigger: '#Section2',
         start: '440px 140px',
         end: '+=600px',
         scrub: true,
         markers:true
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

  return (<section className={`overflow-hidden `} style={{ backgroundColor: "#e34f7f" }}>
   
    <div className=' w-screen h-screen relative ' id='Box'>

    <div  className="top-10 left-10 fixed z-40">
    <SVGComponent/>
    </div> 

<div className='relative left-30 top-52'>
<div className='text-white  w-78 leading-8'>
    <p>Products</p>
    <p className='text-4xl my-4'>Grapes</p>
          Primrose is the closest carnation grower to
      Europe.
      It produces hundreds of varieties - both spray and standard carnations with the preferred mix color required by customers.
      Primrose exports 55 million stems of Spray
      Carnations and approximately 10 million stems of Standard Carnations.
    </div>
</div>
 <div className={`w-140 h-150 right-36 absolute top-0 rounded-4xl `} style={{
  backgroundColor:"#fa7692"
 }}>
    <div className='relative' >
    <Image src={images.grapes.Grapes_1} alt='Avacodos_Image_2' className='w-120 absolute top-56 -right-6 z-12' id='Image2'/>
    <Image src={images.grapes.Grapes_2} alt='Avacodos_Image_3' className='w-120  absolute top-30 right-14 z-10' id='Image3'/>
   
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
                <Image src={images.grapes.Grapes_2} alt='Avacodos image' id="Image4"/>
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

