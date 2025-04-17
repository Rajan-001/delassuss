"use client"


import Img1 from "../assests/Images/avacodos/avacodos_1.png"
import Img2 from "../assests/Images/avacodos/04.avocados_Home_Avocados_02x2_z7qmvq.png"
import Img3 from "../assests/Images/avacodos/avacodos_3.png"

import Flower_1 from "../assests/Images/flowers/flowers_1.png"
import Flower_2 from "../assests/Images/flowers/flowers_2.png"

import Tomatos_1 from "../assests/Images/tomatos/01.products_01.tomatoes_Home_Tomatoes_03x2_s55er1.png"
import Tomatos_2 from "../assests/Images/tomatos/tomatos_2.png"
import Tomatos_3 from "../assests/Images/tomatos/tomatos_3.png"

import Oranges_1 from "../assests/Images/oranges/oranges_1.png"
import Oranges_2 from "../assests/Images/oranges/oranges_2.png"
import Oranges_3 from "../assests/Images/oranges/oranges_3.png"
import Oranges_4 from "../assests/Images/oranges/oranges_4.png"

import Grapes_1 from "../assests/Images/grapes/03.grapes_Home_Grapes_01x2_anh4wc.png"
import Grapes_2 from "../assests/Images/grapes/03.grapes_Home_Grapes_04x2_dxbzat.png"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";



export const images ={
  avocados: { Img1, Img2, Img3 },
  flowers: { Flower_1, Flower_2 },
  tomatos: { Tomatos_1, Tomatos_2, Tomatos_3 },
  oranges: { Oranges_1, Oranges_2, Oranges_3, Oranges_4 },
  grapes: { Grapes_1, Grapes_2 }
};


gsap.registerPlugin(useGSAP,ScrollTrigger);

declare module "react" {
    interface CSSProperties {
      "--index"?: number;
    }
  }



export type ImageList={
items:[
    {id:"avacodos",image1:""}
]

}



