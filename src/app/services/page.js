"use client";
import TopHalf from '@/components/services/TopHalf';
import React from 'react';
import { ImgBanner } from '@/components/common_components/common_components';
import img from '../../../public/images/services/bg.png'

export default function Design(){
    return(
        <div>
            <TopHalf />
            <ImgBanner img={img} />
        </div>
    )
}