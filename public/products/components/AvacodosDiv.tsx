

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Img1 from "../../assests/Images/avacodos/avacodos_1.png"
import Img2 from "../../assests/Images/avacodos/04.avocados_Home_Avocados_02x2_z7qmvq.png"
import Img3 from "../../assests/Images/avacodos/avacodos_3.png"

type Props = {}

export const AvacodosDiv = (props: Props) => {
  
         const container3Ref = useRef(null);
        
       
      
 
         const avacodos1Ref=useRef(null)
         const avacodos2Ref=useRef(null)
         const avacodos3Ref=useRef(null)
         const orange4Ref=useRef(null)


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
                
                if (avacodos1Ref.current) {
                    avacodos1Ref.current.style.transform = `translate(${newX * 2}px, ${newY * 2}px)`;
                    }
                if(avacodos2Ref.current) {
                    avacodos2Ref.current.style.transform = `translate(${newX * 2}px, ${newY * 2}px)`;
                }
                if(avacodos3Ref.current) {
                    avacodos3Ref.current.style.transform = `translate(${newX * 2}px, ${newY * 2}px)`;
                }
                if(orange4Ref.current) {
                    orange4Ref.current.style.transform = `translate(${newX * 2}px, ${newY * 2}px)`;
                }
    
            
                
                
                requestAnimationFrame(animationFrame);
            }
            
            return () => {
                window.removeEventListener("mousemove", onMouseMove);
                cancelAnimationFrame(frameId);
            };
            }, []);
  return (
    <div className='h-76 w-56 bg-[#8bd3b9] relative z-36 group' ref={container3Ref}>
                <Image src={Img1} alt='Flower_1'  className='absolute top-44 -right-4  w-28  group-hover:-translate-y-4 duration-300' ref={avacodos1Ref}/>
                <Image src={Img2} alt='Flower_1'  className='absolute top-40 left-0 z-8  w-18  group-hover:-translate-y-4 duration-300' ref={avacodos2Ref}/>
                <Image src={Img3} alt='Flower_1' className='absolute top-26 left-4 z-5 w-32 group-hover:-translate-y-4 duration-300' ref={avacodos3Ref} />
                  </div>
  )
}