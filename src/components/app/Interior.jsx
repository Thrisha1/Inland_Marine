import React from 'react'
import Image from 'next/image'
import interior1 from '../../../public/images/app/interior/interior1.png'
import interior2 from '../../../public/images/app/interior/interior2.png'
import interior3 from '../../../public/images/app/interior/interior3.png'
import { Headline } from './common_components'



const Interior = () => {
  return (
    <div className='my-20 px-16'>
        <div className='bg-white rounded-[25px] shadow-lg py-5'>
            <Headline text={"INTERIOR DESIGNS"} />
            <div className='mt-16 grid lg:grid-cols-3 gap-4 justify-center'>
                <Image className="h-full" src={interior1} alt="Interior 1" width="450" height="300" />
                <Image className="h-full" src={interior2} alt="Interior 1" width="450" height="300" />
                <Image className="h-full" src={interior3} alt="Interior 1" width="450" height="300" />
                {/* <Image src={interior2} alt="Interior 1" className='mr-5' width="450" height="300" /> */}
            </div>
            <div className='mt-20'>
                <p className='px-32 poppins text-[#0B0B0B] text-center '>As you step indoors, a realm unfurls where tradition converges with innovation, marrying hand-carved embellishments seamlessly with modern conveniences.</p>
            </div>
        </div>
    </div>
  )
}

export default Interior