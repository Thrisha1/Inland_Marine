import React from 'react'
import { Headline, Subline } from '../common_components/common_components.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Card = ({name, l1, l2, l3, icon, btn}) => {
    return(
        <div className='bg-[#1E3888] px-5 py-7 rounded-[20px]'>
            <div className=''>
                <FontAwesomeIcon icon={icon} className='text-white text-[50px] flex m-auto' />
                <h1 className='my-5 poppins font-bold text-white text-center text-3xl'>{name}</h1>
                <p className='my-5 text-white poppins font-semibold text-center text-lg'>{l1}</p>
                <p className='text-center text-white poppins'>{l2}</p>
                <p className='my-5 text-white font-bold text-center poppins'>{l3}</p>
                <div className='flex justify-center'>
                    <button className='bg-white px-5 py-3 rounded-[20px] items-center text-black flex font-bold poppins text-lg'>
                        {btn}
                        {/* <FontAwesomeIcon icon={faPhone} className='ml-3 text-black w-[4%]' /> */}
                    </button>
                </div>
            </div>
        </div>
    )
}

const TopHalf = () => {
    const Cards = [
        {
            name: "PHONE",
            l1: "Direct Line to Adventure",
            l2: "Connect with our dedicated team to discuss your voyage:",
            l3: "+91 79941 82323",
            icon: faPhone,
            btn: "CALL"
        },
        {
            name: "EMAIL",
            l1: "Your Questions, Our Expertise",
            l2: "Have inquiries or looking for more details? Reach us at",
            l3: "info@inlandmarine.com",
            icon: faEnvelope,
            btn: "EMAIL"
        }
    ]
  return (
    <div className='my-20'>
        <Headline name="CONTACT US"/>
        <div className='my-20'>
            <Subline para="Reach out to us to begin your tailor-made journey on the tranquil waters of Kerala's backwaters. Let's craft your dream voyage together." />
        </div>
        <div className='my-20'>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:px-40 px-5 gap-7'>
                {Cards.map(card => <Card name={card.name} l1={card.l1} l2={card.l2} l3={card.l3} icon={card.icon} btn={card.btn} />)}
            </div>
        </div>
    </div>
  )
}

export default TopHalf