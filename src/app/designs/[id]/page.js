import React from 'react';
import { notFound } from 'next/navigation';
import BoatDetails from '@/components/designs/BoatDetails'
import { getBoat, getBoats } from '@/lib/content'

export function generateStaticParams(){
    return getBoats().map((boat) => ({ id: boat.slug }))
}

export default function Details({ params }){
    const boat = getBoat(params.id)

    if(!boat){
        notFound()
    }

    return(
        <div>
            <BoatDetails boat={boat} />
        </div>
    )
}
