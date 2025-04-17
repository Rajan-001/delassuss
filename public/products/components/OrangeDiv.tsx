import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Oranges_1 from "../../assests/Images/oranges/oranges_1.png"
import Oranges_2 from "../../assests/Images/oranges/oranges_2.png"
import Oranges_3 from "../../assests/Images/oranges/oranges_3.png"
import Oranges_4 from "../../assests/Images/oranges/oranges_4.png"

type Props = {}

export const OrangeDiv = (props: Props) => {
  
         const container3Ref = useRef(null);
        
       
      
 
         const orange1Ref=useRef(null)
         const orange2Ref=useRef(null)
         const orange3Ref=useRef(null)
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
                
                if (orange1Ref.current) {
                    orange1Ref.current.style.transform = `translate(${newX * 2}px, ${newY * 2}px)`;
                    }
                if(orange2Ref.current) {
                    orange2Ref.current.style.transform = `translate(${newX * 2}px, ${newY * 2}px)`;
                }
                if(orange3Ref.current) {
                    orange3Ref.current.style.transform = `translate(${newX * 2}px, ${newY * 2}px)`;
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
    <div className='h-76 w-56 z-36 relative group' ref={container3Ref} style={{backgroundColor:"oklch(66.6% 0.179 58.318)"}}>
                <Image src={Oranges_1} alt='Flower_1'  className='absolute top-44 -right-4  w-28  group-hover:-translate-y-4 duration-300' ref={orange1Ref}/>
                <Image src={Oranges_2} alt='Flower_1'  className='absolute top-40 left-0 z-8  w-18  group-hover:-translate-y-4 duration-300' ref={orange2Ref}/>
                <Image src={Oranges_3} alt='Flower_1' className='absolute top-26 left-4 z-5 w-32 group-hover:-translate-y-4 duration-300' ref={orange3Ref} />
                <Image src={Oranges_4} alt='Flower_1' className='absolute top-2 right-4  w-28  group-hover:-translate-y-4 duration-300' ref={orange4Ref} />
                  </div>
  )
}