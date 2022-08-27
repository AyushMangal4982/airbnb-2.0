import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'

function InfoCard({img,location,title, description, star, price, total}:any) {
  return (
    <div className='flex flex-col md:flex-row py-7 px-4 md:px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition-duration-300 ease-out first:border-t'>
      <div className='relative h-60 mb-4 md:mb-0 md:h-52 md:w-80 flex-shrink-0'>
        <Image src={img} layout='fill' objectFit='cover' className='rounded-2xl'/>
      </div>
      <div className='flex flex-col flex-grow md:pl-5 px-1'>
        <div className='flex justify-between'>
            <p>{location}</p>
            <HeartIcon className='h-7 cursor-pointer'/>
        </div>
        <h4 className='text-xl'>{title}</h4>

        <div className='border-b w-10 pt-2'/>
        <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
        <div className='flex justify-between items-end pt-5'>
            <p className='flex items-center'>
                <StarIcon className='h-5 text-red-400'/>{star}
            </p>
            <div className=''>
                <p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
                <p className='text-right font-extralight '>{total}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
