import React from 'react'
import person1 from '../../../public/images/app/testimonials/person1.jpg'
import Image from 'next/image'

const Card = ({person}) => {
    return(
        <div className='bg-white rounded-[20px] px-5 py-5'>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-4 items-center'>
                <Image src={person.profile} width="150" height="150" className='md:col-span-1 w-[150px] h-[150px] rounded-[50%] flex m-auto' />
                <div className='md:ml-5 md:col-span-3'>
                    <h1 className='text-lg poppins font-bold text-black md:text-left text-center'>{person.name}</h1>
                    <p className='poppins text-md text-black my-5 md:text-left text-center'>{person.review}</p>
                </div>
            </div>
        </div>
    )
}

const Testimonials = () => {
    const people = [
        {
            name: "John Doe",
            review: "As someone deeply connected to Kerala's maritime heritage, I was captivated by Inland Marine's dedication to preserving our traditions. Their Kettuvallams are a testament to the craftsmanship that defines our culture. I felt a sense of nostalgia and belonging as I cruised through the backwaters. Truly an authentic experience.",
            profile: person1
        },
        {
            name: "John Doe",
            review: "As someone deeply connected to Kerala's maritime heritage, I was captivated by Inland Marine's dedication to preserving our traditions. Their Kettuvallams are a testament to the craftsmanship that defines our culture. I felt a sense of nostalgia and belonging as I cruised through the backwaters. Truly an authentic experience.",
            profile: person1
        }
    ]
  return (
    <div className='my-20 md:px-16 px-10'>
        <div className='bg-[#1E3888] md:px-10 px-5 py-10 rounded-[35px]'>
            <h1 className='text-3xl poppins font-bold text-center text-white'>TESTIMONIALS</h1>
            <div className='my-10 grid md:grid-cols-2 grid-cols-1 gap-7'>
                {people.map(person => <Card person={person} />)}
            </div>
            <div className='my-16'>
                <h4 className='text-lg poppins text-white text-center'>Discover What Others Are Saying About Their Unforgettable Inland Marine Journeys.</h4>
            </div>
            <div className='md:my-10 my-7 flex justify-center'>
                <button className='bg-white rounded-[25px] px-7 py-3 poppins text-[#1E3888] font-bold text-center'>ADD A REVIEW</button>
                {/* <button className='bg-white rounded-[25px] px-7 py-3 poppins text-[#1E3888] font-bold text-center flex'>ADD A REVIEW <Image src={"../../../svg/downArrow.svg"} className='text-black' width="50" height="50" /> </button> */}
            </div>
        </div>
    </div>
  )
}

export default Testimonials