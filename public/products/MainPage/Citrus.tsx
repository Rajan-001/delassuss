"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import { images } from '../../../public/products/Product'
type Props = {}

export const Citrus = (props: Props) => {
const orange1Ref=useRef(null)
const orange2Ref=useRef(null)
const orange3Ref=useRef(null)
const orange4Ref=useRef(null)

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

  const newX=currentX+(targetX-currentX)*0.1
  const newY=currentY+(targetY-currentY)*0.1
 if(orange1Ref.current){
  orange1Ref.current.style.transform=`translate(${newX * 2.5}px,${newY * 2.5}px) `
 }
 if(orange2Ref.current){
  orange2Ref.current.style.transform=`translate(${newX * 2.5}px,${newY * 2.5}px) `
 }

 if(orange3Ref.current){
  orange3Ref.current.style.transform=`translate(${newX * 2.5}px,${newY * 2.5}px) `
 }
 if(orange4Ref.current){
  orange4Ref.current.style.transform=`translate(${newX * 2.5}px,${newY * 2.5}px) `
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
        
       
       
          <div className='absolute right-24 bottom-12 '>
            <Image src={images.oranges.Oranges_1} alt={''} className='w-60 ' ref={orange1Ref}/>
          </div>

          <div className='absolute bottom-28 left-80 z-14'>
            <Image src={images.oranges.Oranges_2} alt={''} className='w-32' ref={orange2Ref}/>
            
          </div>

          <div className='absolute top-52 z-12 left-46'>
            <Image src={images.oranges.Oranges_3} alt={''} className='w-64'ref={orange3Ref}/>
            
          </div>

          <div className='absolute top-6 left-64'>
            <Image src={images.oranges.Oranges_4} alt={''} className='w-60' ref={orange4Ref}/>
            
          </div>
          
          <div className="text-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-16 leading-56">
              <div className=' z-18 '>
               Oranges
              </div>
            </div>

          </div>
            
          

       
    </section>
  )
}