import React from 'react'
import bg from '../../../public/images/services/bg.png'
import Image from 'next/image'

const BotHalf = () => {
  return (
    <div className='mt-20'>
        <Image src={bg} className='w-[100%]' />
    </div>
  )
}

export default BotHalf