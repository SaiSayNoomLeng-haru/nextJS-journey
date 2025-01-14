import React from 'react'
import Image from 'next/image'

const HostVanCard = ({
    imgUrl,
    price,
    name,
    type,
    description,
    width,
    height
}: {
    imgUrl: string
    price: number
    name: string
    type: string
    description: string
    width: number
    height: number
}) => {
    const url = `http://127.0.0.1:1337${imgUrl}`
    
  return (
    <div className='flex gap-2 bg-white p-3 rounded-lg'>
        <Image 
            src={url}
            width={width}
            height={height}
            alt=''
            className='max-w-[80px] flex-none rounded-lg'
            priority
        />

        <div className='flex-1 p-2'>
            <p className="font-semibold">{name}</p>
            <p><span className="font-semibold">${price}</span> /day</p>
        </div>
    </div>
  )
}

export default HostVanCard