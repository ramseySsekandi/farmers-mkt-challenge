import { ICategory } from '@/types/types'
import Image from 'next/image'
import React from 'react'

const Category = ({category}:{category:ICategory}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className="w-[100px] h-[100px] relative ">
        <Image src={category.image} alt={category.slug} fill className='rounded-xl object-cover'/>
        </div>
        <h3 className='text-center text-sm font-medium'>{category.title}</h3>
    </div>
  )
}

export default Category