"use client";
import { ImgBanner } from '@/components/common_components/common_components';
import React from 'react';
import img from '../../../public/images/contact/bg.png'
import TopHalf from '@/components/contact/TopHalf';

export default function Design(){
    return(
        <div>
            <TopHalf />
            <ImgBanner img={img} />
        </div>
    )
}