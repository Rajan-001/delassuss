import React, { useEffect, useRef } from 'react'
import Image from 'next/image'


import Tomatos_1 from "../../assests/Images/tomatos/01.products_01.tomatoes_Home_Tomatoes_03x2_s55er1.png"
import Tomatos_2 from "../../assests/Images/tomatos/tomatos_2.png"
import Tomatos_3 from "../../assests/Images/tomatos/tomatos_3.png"

type Props = {}

export const TomatosDiv = (props: Props) => {
  const container2Ref = useRef(null);
 
 
           const tomatos1Ref=useRef(null)
               const tomatos2Ref=useRef(null)
               const tomatos3Ref=useRef(null)

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
                
                if (tomatos1Ref.current) {
                    tomatos1Ref.current.style.transform = `translate(${newX * 2}px, ${newY * 2}px)`;
                    }
        
                    if (tomatos2Ref.current) {
                        tomatos2Ref.current.style.transform = `translate(${newX * 2}px, ${newY * 2}px)`;
                      }
        
                    if (tomatos3Ref.current) {
                        tomatos3Ref.current.style.transform = `translate(${newX * 2}px, ${newY * 2}px)`;
                      }
                
                
                requestAnimationFrame(animationFrame);
            }
            
            return () => {
                window.removeEventListener("mousemove", onMouseMove);
                cancelAnimationFrame(frameId);
            };
            }, []);
  return (
    <div  className='h-76 w-56 bg-red-400 relative group z-36' ref={container2Ref}>
                <Image src={Tomatos_1} alt='Flower_1'  className='absolute top-4 right-4 w-24  group-hover:-translate-y-4 duration-300' ref={tomatos1Ref}/>
                <Image src={Tomatos_2} alt='Flower_1'  className='absolute top-28 -right-4 w-30  group-hover:-translate-y-4 duration-300' ref={tomatos2Ref}/>
                <Image src={Tomatos_3} alt='Flower_1'  className='absolute top-28  w-30 -left-2  group-hover:-translate-y-4 duration-300'ref={tomatos3Ref}/>
                </div>
  )
}