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
    gsap.to("#Image1",{
     y:-130,
     scrollTrigger: {
         trigger: '#Box',
         start: '140px 140px',
         end: '+=600px',
         scrub: true,
         markers:true
       }
    })
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
    y:-600
    })
 
    
    gsap.to("#Image4",{
     y:100,
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

  return (<section className={`overflow-x-hidden `} style={{ backgroundColor: "#ff8921" }}>
    <div className=' w-screen h-screen relative ' id='Box'>

    <div  className="top-10 left-10 fixed">
    <SVGComponent/>
    </div> 

<div className='relative left-30 top-72'>
<div className='text-white  w-68 leading-8'>
    <p>Products</p>
    <p className='text-3xl my-4'>Avacodos</p>
The young farm planted by Delassus will be at its full capacity by 2025.  The volume will reach 2,000 tons and be available from January to April. 
    </div>
</div>
 <div className={`w-160 h-150 right-36 absolute top-0 rounded-4xl `} style={{
  backgroundColor:"#ff7128"
 }}>
    <div className='relative' >
    <Image src={images.oranges.Oranges_1} alt='Avacodos_Image_2' className='w-84 absolute top-46 left-8 z-12' id='Image2'/>
    <Image src={images.oranges.Oranges_2} alt='Avacodos_Image_3' className='w-84  absolute top-4 left-10' id='Image3'/>
    <Image src={images.oranges.Oranges_3} alt='Avacodos_Image_1' className='w-90 absolute top-55 right-2 z-14'  id='Image1'/>
    <Image src={images.oranges.Oranges_4} alt='Avacodos_Image_1' className='w-90 absolute top-55 right-2 z-14'  id='Image4'/>
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

                    Best variety of avocados <br/>
                    Main variety: Hass<br/>
                    Main market: UK<br/>
                    Deliveries in loose by counts to be ripened and ppacked at destination<br/>
                    Period: January to April.<br/>
                    The avocados are packed in a dedicated packhouse located on the farm, near Azemour.<br/>
                    </p>
                </div>
                <div className='absolute left-4 bottom-2 w-80'>
                <Image src={images.oranges.Oranges_1} alt='Avacodos image' id="Image4"/>
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

