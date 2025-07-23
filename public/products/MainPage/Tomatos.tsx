"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import { images } from '../../../public/products/Product'
type Props = {}

export const Tomatos = (props: Props) => {

   const tomatos1Ref=useRef(null)
    const tomatos2Ref=useRef(null)
    const tomatos3Ref=useRef(null)
  
    
    const targetPosition=useRef({x:0,y:0})
    const currentPosition=useRef({x:0,y:0})
    
    useEffect(()=>{
    const frameId=requestAnimationFrame(animationFrame)
    window.addEventListener("mousemove",onMouseMove)
    
    function onMouseMove(event:MouseEvent)
    {
      const {innerWidth,innerHeight}=window
      const xPercent=(event.clientX/innerWidth-0.5)*15
      const yPercent=(event.clientY/innerHeight-0.5)*15
      
      targetPosition.current=({
        x:xPercent*-30,
        y:yPercent*-30
      })
    }
    function animationFrame(){
      const {x:currentX,y:currentY}=currentPosition.current
      const {x:targetX,y:targetY}=targetPosition.current
    
      

      const newX = currentX + (targetX - currentX) * 0.1;
      const newY = currentY + (targetY - currentY) * 0.1;
                  

     if(tomatos1Ref.current){
      tomatos1Ref.current.style.transform=`translate(${newX * 2.5}px,${newY * 2.5}px) `
     }
     if(tomatos2Ref.current){
      tomatos2Ref.current.style.transform=`translate(${newX * 2.5}px,${newY * 2.5}px) `
     }
    
     if(tomatos3Ref.current){
      tomatos3Ref.current.style.transform=`translate(${newX * 2.5}px,${newY * 2.5}px) `
     }
     requestAnimationFrame(animationFrame)
    }
   
    return()=>{
      window.removeEventListener("mousemove",onMouseMove)
      cancelAnimationFrame(frameId)
    }
    
    },[])
  

  return (

    <section>
        <div className='w-screen h-screen bg-red relative'>
        
       
       
          <div className='absolute right-14 bottom-12 '>
            <Image src={images.tomatos.Tomatos_2} alt={''} className='w-84 ' ref={tomatos3Ref}/>
          </div>

          <div className='absolute bottom-8 left-30 z-4'>
            <Image src={images.tomatos.Tomatos_3} alt={''} className='w-72' ref={tomatos2Ref}/>
            
          </div>

          <div className='absolute top-12 left-40'>
            <Image src={images.tomatos.Tomatos_1} alt={''} className='w-76' ref={tomatos1Ref}/>
            
          </div>
          
          <div className="text-[40px] sm:text-[60px] md:text-[100px] lg:text-[120px] xl:text-[150px] 2xl:text-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-16 leading-56">
              <div className=' z-18 '>
                Smacking <br/>
               Tomatos
              </div>
            </div>

          </div>
            
          

       
    </section>
  )
}