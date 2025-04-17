import React from 'react'
import { FlowerDiv } from '../FlowersDiv'
import { AvacodosDiv } from '../AvacodosDiv'
import { GrapesDiv } from '../GrapesDiv'
import { OrangeDiv } from '../OrangeDiv'
import { TomatosDiv } from '../TomatosDiv'

type Props = {}

export const ProductDescription = (props: Props) => {
  return (
    <div>

         <div className='w-screen h-screen  '>
                    <div className='justify-items-center grid grid-cols-5'>
                    <FlowerDiv/>
                       <TomatosDiv/>
                      < AvacodosDiv/>
                          <OrangeDiv/>
                           <GrapesDiv/>             
                    </div>
                    </div>
    </div>
  )
}