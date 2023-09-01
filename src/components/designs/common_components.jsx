import Image from "next/image"

export const Card = ({data}) => {
    return(
        <div className='mt-20 bg-white px-5 py-5 rounded-[20px]'>
            <div className='md:flex grid grid-cols-1'>
                <Image src={data.img} alt="boat" width="350" height="350" />
                <div className='md:px-10 px-5'>
                    <h1 className='text-[#1E3888] sm:text-center poppins text-xl font-semibold'>{data.title}</h1>
                    <p className='mt-10 font-semibold poppins '>{data.tag}</p>
                    <p className='mt-5 poppins'>{data.desc}</p>
                    <button className='mt-16 bg-[#1E3888] text-white text-center px-4 py-2 rounded-[20px]'>VIEW DETAILS</button>
                </div>
            </div>
        </div>
    )
}