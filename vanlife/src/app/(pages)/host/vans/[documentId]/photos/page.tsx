import { getVansDetail } from '@/api'
import Image from 'next/image';
import React from 'react'

const Photos = async ({params} : { params: Promise<{documentId: string}>}) => {
    const { documentId } = await params
    const data = await getVansDetail(documentId);
    if(!data){
        return null
    }
  return (
    <div>
        <Image
         src={`http://127.0.0.1:1337${data.imgUrl.url}`}
         width={data.imgUrl.width}
         height={data.imgUrl.height}
         alt='' 
         priority/>
    </div>
  )
}

export default Photos