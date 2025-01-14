'use client'

import { getAllVans } from '@/api'
import VanCard from '@/components/VanCard';
import { VansType } from 'app/_lib/definitions';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


const Vans = () => {
  const [ vans, setVans ] = useState<VansType[]>([]);
  const [ totalPage, setTotalPage] = useState<number>(1);
  const [ currentPage, setCurrentPage ] = useState<number>(1);
  const [ activeFilter, setActiveFilter ] = useState<
  {key: string | null, value: string | null}>({key: null, value: null})

  const loadVans = async (key: string | null, value: string | null, page = 1, pageSize = 4) => {
    const { vans, pagination } = await getAllVans(key, value, page, pageSize);
    setVans(vans)
    setTotalPage(pagination.pageCount)
  }

  useEffect(() => {
    loadVans(activeFilter.key, activeFilter.value, currentPage, 4)
  }, [activeFilter, currentPage])

  const handlePageChange = (newPage: number) => {
    if(newPage >= 1 && newPage <= totalPage){
      setCurrentPage(newPage)
    }
  }

  const handleFilter = ( key:string | null, value: string | null ) => {
    setActiveFilter({key, value})
    setCurrentPage(1)
  }

  // classes and styles
  const vansPage = 'space-y-5'
  const filterBtn = clsx(
    'bg-custom-pale px-2 py-1 rounded-sm',
  )
  return (
    <section className={vansPage}>
      <h1 className="heading">Explore our van options.</h1>

      <div className='flex gap-5'>
        <button 
          onClick={() => handleFilter('type', 'simple')}
          className={filterBtn}>
          Simple
        </button>

        <button 
          onClick={() => handleFilter('type', 'rugged')}
          className={filterBtn}>
          Rugged
        </button>

        <button 
          onClick={() => handleFilter('type', 'luxury')}
          className={filterBtn}>
          Luxury
        </button>

        { activeFilter.key && 
          <button 
            onClick={() => handleFilter(null, null)}
            className='ml-auto text-red-800 underline'>
              Clear Filter
            </button>
        }
      </div>

      <div className='grid grid-cols-2 gap-3'>
        {
          vans.map((van: VansType) => (
            <Link
              href={`/vans/${van.documentId}`}
              key={van.id}>
                <VanCard 
                  imgUrl={van.imgUrl.url}
                  width={van.imgUrl.width}
                  height={van.imgUrl.height}
                  name={van.name}
                  type={van.type}
                  price={van.price}/>
            </Link>
          ))
        }
      </div>

      <div className='flex items-center justify-center gap-2'>
        { Array.from({length: totalPage}, (_, i) => (
          <button
            key={i}
            className={clsx(
              'px-2 py-1 text-fs-300 font-bold',
              currentPage === i + 1
              ? 'bg-custom-orange text-black'
              : 'bg-custom-pale text-white'
            )}
            onClick={() => handlePageChange(i + 1)}
          >{i + 1}</button>
        ))}
      </div>
    </section>
  )
}

export default Vans