"use client"
import React, { useEffect, useState } from 'react'

import { Avacodos } from '../../public/products/MainPage/Avacodos';
import { Grapes } from '../../public/products/MainPage/Grapes';
import { Tomatos } from '../../public/products/MainPage/Tomatos';
import { Citrus } from '../../public/products/MainPage/Citrus';
import { Flowers } from '../../public/products/MainPage/Flowers';
import { AnimatePresence, motion } from "framer-motion";

import { Button } from '../../public/products/components/Button';
import SVGComponent from '../../public/assests/Svg/Svg.';




const components = [
  {
    name:"Flowers",
    components:Flowers,
    color:"#e7524c",
    path:'flowers'
  }, 
  {
      name:"Avacodos",
    components:Avacodos,
    color:"#FF8488",
    path:'avacodos'
   },
   {
    name:"Tomatos",
    components:Tomatos,
    color:"#e7524c",
    path:'tomatos'
   }, 
   {
    name:"Grapes",
   components:Grapes,
   color:"#8B0000",
   path:'grapes'
  }, 
   {
    name:"Citrus",
   components:Citrus,
   color:"#FFFFC5",
   path:'citrus'
  }];


export default function Home() {
  const [index,setIndex]=useState(0)

  
  useEffect(()=>{
   const intervalId=setInterval(()=>{
    setIndex((prevIndex)=>(prevIndex+1)%components.length)
   },7000)

   return ()=>clearInterval(intervalId)
  },[])

  const { name, components: CurrentComponent } = components[index];

  return (
    <div className='overflow-hidden w-screen h-screen relative'>
       <div className='absolute top-5 left-8 z-48'>
               <SVGComponent/>
               </div>
 
<div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20 text-center">
        <div className="flex justify-center gap-10 text-xl font-semibold ">
          {components.map((item, idx) => (
    
            <div key={idx} className="relative inline-block transition-normal duration-700 px-4">
           <div className={`${index===idx?"text-white font-bold mb-2":"text-gray-200 mb-2 "} cursor-pointer` } onClick={()=>
            {
            setIndex(idx)}}>
            {item.name}
            </div>
          

           
          
                 {index === idx && (
                  <>
                    {/* Underline progress bar */}
                    <motion.div
                      key={idx}
                      className="absolute top-0 left-0 w-full h-[4px] bg-white z-48"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 7, ease: "linear" }}
                      style={{ transformOrigin: "left",color:"white" }}
                    />
                    </>
                )
               
              && <div className=' top-170 right-12 fixed'><Button BgColor={`${item.color}`} PageRoute={`${item.path}`}   /> </div>
              
              }
              
            </div>
          ))}
        </div>
      </div>



     <AnimatePresence>
  <motion.div
    key={index}
    initial={{ x: "100%", opacity: 1 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: "-100%", opacity: 0 }}
    transition={{
      duration: 1.8,
      ease: [0.25, 1, 0.5, 1] // cubic-bezier for a smooth "ease-out" look
    }}
    className="absolute w-screen h-screen overflow-y-hidden overflow-x-hidden"
  >
    <CurrentComponent />
  </motion.div>
</AnimatePresence>



    </div>
  );
}
