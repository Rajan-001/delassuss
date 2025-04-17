"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import { images } from '../../../public/products/Product'
type Props = {}

export const Avacodos = (props: Props) => {
  const avacodos1Ref=useRef(null)
  const avacodos2Ref=useRef(null)
  const avacodos3Ref=useRef(null)

  
  const targetPosition=useRef({x:0,y:0})
  const currentPosition=useRef({x:0,y:0})
  
useEffect(()=>{
const frameId=requestAnimationFrame(animationFrame)

window.addEventListener("mousemove",onMouseMove)

function onMouseMove(event:MouseEvent)
{
    const {innerWidth,innerHeight}=window;
    const xPercent=(event.clientX/innerWidth-0.5)*15
    const yPercent=(event.clientY/innerHeight-0.5)*15
   
    targetPosition.current=({
        x:xPercent*-30,
        y:yPercent*-30
    })
}

function animationFrame(){
const {x:targetX,y:targetY}=targetPosition.current
const {x:currentX,y:currentY}=currentPosition.current



const newX = currentX + (targetX - currentX) * 0.1;
const newY = currentY + (targetY - currentY) * 0.1;
            
if (avacodos1Ref.current) {
    // Move flower 1 with a stronger effect
    avacodos1Ref.current.style.transform = `translate(${newX * 2.5}px, ${newY * 2.5}px)`;
  }
  
  if (avacodos2Ref.current) {
    // Move flower 2 with a different speed for depth effect
    avacodos2Ref.current.style.transform = `translate(${newX * 2.5}px, ${newY * 2.5}px)`;
  }
  if (avacodos3Ref.current) {
    // Move flower 2 with a different speed for depth effect
    avacodos3Ref.current.style.transform = `translate(${newX * 2.5}px, ${newY * 2.5}px)`;
  }
  requestAnimationFrame(animationFrame)
}

return ()=>{
    window.removeEventListener("mousemove",onMouseMove)
    cancelAnimationFrame(frameId)
}

},[])

  return (

    <section>
        <div className='w-screen h-screen bg-light-green relative'>
        
       
       
          <div className='absolute right-14 bottom-12 '>
            <Image src={images.avocados.Img1} alt={''} className='w-84 ' ref={avacodos1Ref}/>
          </div>

          <div className='absolute bottom-8 left-30 z-4'>
            <Image src={images.avocados.Img2} alt={''} className='w-72' ref={avacodos2Ref}/>
            
          </div>

          <div className='absolute top-12 left-40'>
            <Image src={images.avocados.Img3} alt={''} className='w-76' ref={avacodos3Ref}/>
            
          </div>
          
          <div className="text-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-16">
              <div className=' z-18'>
                Avacodos
              </div>
            </div>

          </div>
            
          

       
    </section>
  )
}