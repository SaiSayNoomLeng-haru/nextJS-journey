import clsx from 'clsx'
import React from 'react'

const VanCard = ({
   imgUrl,
   width,
   height,
   name,
   type,
   price

}: {
   imgUrl: string
   width: number
   height: number
   name: string
   type: string
   price: number
}) => {
    const url = `http://127.0.0.1:1337${imgUrl}`
    // classes and styles
    const vanCard = clsx(
        'flex flex-col gap-3 items-start', 
    )
  return (
    <div className={vanCard}>
        <img
            src={url}
            width={width}
            height={height}
            alt={`${name}'s beautiful photo`}
            className='rounded-sm h-[250px]'
            loading='lazy'
        />

        <div className='w-full flex justify-between'>
            <p className="font-semibold">{name}</p>
            <p>
                <span className="font-semibold">${price}</span>
                /day
            </p>
        </div>

        <p className={clsx(
            'font-semibold inline-block px-2 py-1 rounded-sm text-white capitalize',
            {
                'bg-simple' : type === 'simple',
                'bg-rugged': type === 'rugged',
                'bg-luxury': type === 'luxury'
            }
        )}>{type}</p>
    </div>
  )
}

export default VanCard