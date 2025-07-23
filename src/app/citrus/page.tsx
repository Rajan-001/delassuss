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
    gsap.to("#Image5",{
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

  return (<section className={`overflow-hidden `} style={{ backgroundColor: "#ff8921" }}>
   
    <div className=' w-screen h-screen relative ' id='Box'>

    <div  className="top-10 left-10 fixed">
    <SVGComponent/>
    </div> 

<div className="relative left-12 top-24 md:left-30 md:top-72">
  <div className="text-white w-11/12 sm:w-4/5 md:w-[30rem] leading-8 sm:text-center">
    <p className="text-sm uppercase tracking-wide">Products</p>
    <p className="text-2xl md:text-4xl font-semibold my-4">Citrus</p>
    <p>
      The young farm planted by Delassus will reach full capacity by 2025.
      The expected volume is 2,000 tons, available from January through April,
      ensuring a fresh supply during the early season.
    </p>
  </div>
</div>


<div className="w-full sm:w-[32rem] md:w-[35rem] xl:w-[35rem] h-[40rem] sm:h-[46rem] md:h-[50rem] right-4 sm:right-12 md:right-36 absolute top-0 rounded-4xl md:bg-transparent xl:bg-[#ff7128]">
  <div className="relative w-full h-full">
    <Image
      unoptimized
      src={images.oranges.Oranges_1}
      alt="Oranges_Image_1"
      className="w-32 sm:w-48 md:w-60 xl:w-66 absolute top-72 sm:top-96 -right-2 sm:-right-6 md:-right-12 z-12"
      id="Image2"
    />
    <Image
      unoptimized
      src={images.oranges.Oranges_2}
      alt="Oranges_Image_2"
      className="w-16 sm:w-24 md:w-28 xl:w-32 absolute top-[24rem] sm:top-[26rem] md:top-[28rem] left-6 sm:left-12 md:left-20 z-16"
      id="Image3"
    />
    <Image
      unoptimized
      src={images.oranges.Oranges_3}
      alt="Oranges_Image_3"
      className="w-28 sm:w-40 md:w-52 xl:w-64 absolute top-52 sm:top-60 md:top-34 left-6 sm:left-10 md:left-26 z-14"
      id="Image1"
    />
    <Image
      unoptimized
      src={images.oranges.Oranges_4}
      alt="Oranges_Image_4"
      className="w-32 sm:w-40 md:w-52 xl:w-70 absolute top-4 sm:top-6 md:top-8 right-8 sm:right-16 md:right-24 z-14"
      id="Image5"
    />
  </div>
</div>


    </div>
   
    <div className={`w-screen h-[85vh] overflow-hidden relative flex justify-center items-center `} style={{
      backgroundColor:"#ff8921"
    }}>
      <video
        src="/assests/Videos/Boucle_Citrus.mp4"
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

                    Best variety of citrus <br/>
                    Main variety: Hass<br/>
                    Main market: UK<br/>
                    Deliveries in loose by counts to be ripened and ppacked at destination<br/>
                    Period: January to April.<br/>
                    The citrus are packed in a dedicated packhouse located on the farm, near Azemour.<br/>
                    </p>
                </div>
                <div className='absolute left-4 bottom-2 w-80'>
                <Image unoptimized src={images.oranges.Oranges_1} alt='Avacodos image' id="Image4"/>
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

