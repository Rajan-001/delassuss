import React, { useEffect, useRef } from 'react'
import Image from 'next/image'


import Grapes_1 from "../../assests/Images/grapes/03.grapes_Home_Grapes_01x2_anh4wc.png"
import Grapes_2 from "../../assests/Images/grapes/03.grapes_Home_Grapes_04x2_dxbzat.png"

type Props = {}

export const GrapesDiv = (props: Props) => {
  const container4Ref = useRef(null);
 
 
         const grapes1Ref=useRef(null)
         const grapes2Ref=useRef(null)


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
                
                if (grapes1Ref.current) {
                // Move flower 1 with a stronger effect
                grapes1Ref.current.style.transform = `translate(${newX * 1.5}px, ${newY * 1.5}px)`;
                }
                
                if (grapes2Ref.current) {
                // Move flower 2 with a different speed for depth effect
                grapes2Ref.current.style.transform = `translate(${newX * 2.5}px, ${newY * 2.5}px)`;
                }
    
            
                
                
                requestAnimationFrame(animationFrame);
            }
            
            return () => {
                window.removeEventListener("mousemove", onMouseMove);
                cancelAnimationFrame(frameId);
            };
            }, []);
  return (
    <div  className='h-76 w-56 bg-pink-400 relative group z-36' ref={container4Ref}>
    <Image src={Grapes_1} alt='Flower_1'  className='absolute top-14 left-4 w-64 z-2 group-hover:-translate-y-4 duration-300' ref={grapes1Ref}/>
    <Image src={Grapes_2} alt='Flower_1'  className='absolute  left-4 w-64  group-hover:-translate-y-4 duration-300' ref={grapes2Ref}/>

    </div>
  )
}