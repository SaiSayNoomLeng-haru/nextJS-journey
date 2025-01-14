'use client'

import { getVansDetail } from '@/api';
import { VansType } from 'app/_lib/definitions';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { use } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const VansDetail =  ({
    params
}: {
    params: Promise<{ vansId: string }>
}) => {
    const { vansId } = use(params);
    const [ van, setVan ] = useState<VansType>()
    const router = useRouter();
    
    useEffect(() => {
        async function loadVanDetail(){
            const data = await getVansDetail(vansId);
            setVan(data)
        }
        loadVanDetail();
    },[])

    // classes and styles
    const vansDetailPage = clsx(
        'flex flex-col gap-3 items-start'
    )

    const typeClass = clsx(
        'px-2 py-1 capitalize text-white rounded-sm',
        {
            'bg-simple': van?.type === 'simple',
            'bg-rugged': van?.type === 'rugged',
            'bg-luxury': van?.type === 'luxury'
        }
    )

    if(!van){
        return <p>No Data</p>
    }
  return (
    <section className={vansDetailPage}>
        <button className='flex items-center gap-3' onClick={() => router.back()}>
            <FaArrowLeft />
            Go Back</button>

        <img src={`http://127.0.0.1:1337${van.imgUrl.url}`} className='w-full rounded-sm'/>

        <p className={typeClass}>{van.type}</p>

        <p className='capitalize font-semibold text-fs-700'>{van.name}</p>

        <p><span className="font-semibold">${van.price}</span>/day</p>

        <p>{van.description}</p>
    </section>
  )
}

export default VansDetail