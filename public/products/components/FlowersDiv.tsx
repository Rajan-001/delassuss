import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Flower_1 from "../../assests/Images/flowers/flowers_1.png"
import Flower_2 from "../../assests/Images/flowers/flowers_2.png"

type Props = {}

export const FlowerDiv = (props: Props) => {
 const container1Ref = useRef(null);
        const flower1Ref = useRef(null);
         const flower2Ref = useRef(null);
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
                
                if (flower1Ref.current) {
                // Move flower 1 with a stronger effect
                flower1Ref.current.style.transform = `translate(${newX * 1.5}px, ${newY * 1.5}px)`;
                }
                
                if (flower2Ref.current) {
                // Move flower 2 with a different speed for depth effect
                flower2Ref.current.style.transform = `translate(${newX * 2.5}px, ${newY * 2.5}px)`;
                }
    
            
                
                
                requestAnimationFrame(animationFrame);
            }
            
            return () => {
                window.removeEventListener("mousemove", onMouseMove);
                cancelAnimationFrame(frameId);
            };
            }, []);
  return (
    <div className='h-76 w-56 bg-yellow-200 relative group z-36' ref={container1Ref} >
    <Image src={Flower_1} alt='Flower_1'  className='absolute top-28 left-4 w-64  group-hover:-translate-y-4 duration-300' ref={flower1Ref}/>
    <Image src={Flower_2} alt='Flower_1'  className='absolute top-2 right-2 w-32  group-hover:-translate-y-4 duration-300' ref={flower2Ref}/>
</div>
  )
}