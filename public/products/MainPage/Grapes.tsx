"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import { images } from '../../../public/products/Product'
type Props = {}

export const Grapes = (props: Props) => {
const grapes1Ref=useRef(null)
const grapes2Ref=useRef(null)

const targetPosition=useRef({x:0,y:0})
const currentPositon=useRef({x:0,y:0})

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
const {x:currentX,y:currentY}=currentPositon.current



const newX = currentX + (targetX - currentX) * 0.1;
const newY = currentY + (targetY - currentY) * 0.1;
            
if (grapes1Ref.current) {
    // Move flower 1 with a stronger effect
    grapes1Ref.current.style.transform = `translate(${newX * 2.5}px, ${newY * 2.5}px)`;
  }
  
  if (grapes2Ref.current) {
    // Move flower 2 with a different speed for depth effect
    grapes2Ref.current.style.transform = `translate(${newX * 2.5}px, ${newY * 2.5}px)`;
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
        <div className='w-screen h-screen bg-pink relative'>
        
        
       
          <div className='absolute right-34 bottom-12 '>
            <Image src={images.grapes.Grapes_1} alt={''} className='w-120 ' ref={grapes1Ref}/>
          </div>

          <div className='absolute top-36 left-48 z-4'>
            <Image src={images.grapes.Grapes_2} alt={''} className='w-120' ref={grapes2Ref}/>
            
          </div>

          
          <div className="text-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-16">
              <div className=' z-18'>
                Grapes
              </div>
            </div>

          </div>
            
          

       
    </section>
  )
}