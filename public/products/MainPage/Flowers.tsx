"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import { images } from '../../../public/products/Product'

type Props = {}

export const Flowers = (props: Props) => {
const flower1Ref=useRef(null)
const flower2Ref=useRef(null)

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
            
if (flower1Ref.current) {
    // Move flower 1 with a stronger effect
    flower1Ref.current.style.transform = `translate(${newX * 2.5}px, ${newY * 2.5}px)`;
  }
  
  if (flower2Ref.current) {
    // Move flower 2 with a different speed for depth effect
    flower2Ref.current.style.transform = `translate(${newX * 2.5}px, ${newY * 2.5}px)`;
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
        <div className='w-screen h-screen bg-yellow relative overflow-y-hidden'>
        
      
       
          <div className='absolute right-54 -bottom-10 '>
            <Image src={images.flowers.Flower_1} alt={''} className='w-140 ' ref={flower1Ref}/>
          </div>

          <div className='absolute top-32 left-60 z-4'>
            <Image src={images.flowers.Flower_2} alt={''} className='w-80'ref={flower2Ref}/>
            
          </div>

          
          <div className="text-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-16">
              <div className=' z-18'>
                Flowers
              </div>
            </div>

          </div>
            
          

       
    </section>
  )
}