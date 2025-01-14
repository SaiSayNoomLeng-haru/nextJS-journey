'use client'

import { getAllVans } from '@/api'
import HostVanCard from '@/components/HostVanCard'
import { VansResponse, VansType } from 'app/_lib/definitions'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md'

const Vans = () => {
  const [ vans, setVans] = useState<VansType []>();
  const [ totalPage, setTotalPage ] = useState(1);
  const [ currentPage, setCurrentPage ] = useState<number>(1);

  const loadVans = async (key: string | null, value: string | null, page = 1, pageSize = 3)=> {
    const data = await getAllVans(key, value, page, pageSize);
    if(data){
      setVans(data.vans);
      setTotalPage(data.pagination.pageCount);
    }
  } 

  useEffect(() => {
    loadVans(null, null, currentPage, 2)
  }, [ currentPage ])

  const handleNextPage = () => {
    if(currentPage === totalPage){
      setCurrentPage(totalPage)
    }else{
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevpage = () => {
    if(currentPage > 0 && currentPage !== 0){
      setCurrentPage(currentPage - 1)
    }if(currentPage < 0){
      setCurrentPage(1)
    }
  }

  // classes and styles
  const hostVansPage = 'flex flex-col gap-5'

  if(!vans){
    return <p>No Data</p>
  }
  return (
    <div className={hostVansPage}>
      <h1 className="font-bold text-fs-600">Your listed Vans</h1>

      <div className='flex flex-col gap-3'>
        {vans.map((van: VansType) => (
          <Link
            key={van.documentId}
            href={`/host/vans/${van.documentId}`}>
              <HostVanCard 
                name={van.name}
                imgUrl={van.imgUrl.formats.thumbnail.url}
                type={van.type}
                price={van.price}
                description={van.description}
                width={van.imgUrl.formats.thumbnail.width}
                height={van.imgUrl.formats.thumbnail.height}/>
          </Link>
        ))}
      </div>

      <div className='flex gap-3 justify-center items-center'>
        <button 
          onClick={() => handlePrevpage()} 
          disabled={currentPage <= 1}
          className={clsx(
            {'text-gray-600' : currentPage <= 1}
          )}
          ><MdSkipPrevious />
        </button>

        <p>Page <span className='font-semibold text-custom-orange'>{currentPage}</span> of {totalPage}</p>

        <button 
          onClick={() => handleNextPage()}
          disabled={currentPage === totalPage}
          className={clsx(
            {'text-gray-600' : currentPage === totalPage}
          )}>
            <MdSkipNext />
        </button>
      </div>

    </div>
  )
}

export default Vans