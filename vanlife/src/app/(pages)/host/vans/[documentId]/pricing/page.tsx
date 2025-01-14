import { getVansDetail } from '@/api';
import React from 'react'

const Price = async ({
    params
}: {
    params: Promise<{documentId: string}>
}) => {
    const { documentId } = await params;
    const data = await getVansDetail(documentId);
    
    if(!data){
        return null
    }
  return (
    <div>
        <ul className='list-disc ml-3'>
            <li>We start off the renting with deposit of 3 days of the vans Rent.</li>
            <li>If you rent a van, we'll charge with 3 days of vans renting price and then add on to the total if you over-pass 3 days price.</li>
            <li>So Bascially, if you rent a van with a daily price of $100, the initial charge will be $300.</li>
            <li>For this <span className="font-semibold text-custom-orange">{data.name}</span>, daily charge is <span className="font-semibold text-custom-orange">${data.price}</span>, the initial price would be <span className="font-semibold text-custom-orange">${data.price * 3}</span>.</li>
            <li>Note that, these price calculations are excluded <span className="font-semibold text-custom-orange">Tax.</span></li>
            
        </ul>

    </div>
  )
}

export default Price