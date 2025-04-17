import { MoveRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react'


type Props = {
    BgColor:string,
    PageRoute:string
}

export const Button = ({BgColor,PageRoute}: Props) => {

      const [hovered, setHovered] = useState(false);
   const router=useRouter()
     
  return (
    <div className='relative' >
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`absolute right-8 bottom-12 group text-white font-semibold cursor-pointer rounded-full overflow-hidden  w-52 h-16 backdrop-blur-md ${BgColor} hover:bg-white/10 border border-white/30 shadow-md transition-all duration-500`}
      onClick={()=>{ setTimeout(()=>{
        router.push(`/products/${PageRoute}`)
      },200) }}    
  >
  
      {/* Smooth red background fill on hover */}
      <span
        className="absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left z-0"
     
      />
    
      {/* Button text */}
      <div className="relative z-10 text-white -translate-x-8">Discover</div>

      {/* Moving Circle */}
      <span
        className={`absolute top-1/2 w-15 h-15 ${BgColor} rounded-full -translate-y-1/2 transition-all duration-500 ease-in-out ${
          hovered ? "translate-x-10" : "invisible"
        }`}
      />

      {/* Arrow icon */}
      <span
        className={`absolute top-1/2 text-white transition-all duration-600 ease-in-out left-32 ${
          hovered ? "left-[calc(100%-40px)]" : "left-1/2"
        } -translate-y-1/2 z-10`}
      >
        <MoveRight size={20} />
      </span>
    </button>
    </div>
  )
}