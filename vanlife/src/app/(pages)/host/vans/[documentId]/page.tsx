import { getVansDetail } from '@/api'
import React from 'react'

const Detail = async ({ params } : {params: Promise<{documentId: string}>}) => {
    const { documentId } = await params
    const detail = await getVansDetail(documentId)
   
    if(!detail){
      return null
    }
  return (
    <div className='flex flex-col gap-5'>
        <p className='capitalize'><span className="font-semibold ">Name: </span>{detail.name}</p>
        <p className='capitalize'><span className="font-semibold">Category: </span>{detail.type}</p>
        <p><span className="font-semibold">Description: </span>{detail.description}</p>
        <p><span className="font-semibold">Visibility: </span>Public</p>
    </div>
  )
}

export default Detail