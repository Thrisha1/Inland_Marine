import Image from "next/image"
import { UisStar } from '@iconscout/react-unicons-solid'


export const Card = ({data}) => {
    const starArray = new Array(data.stars).fill(null) || null;
    return(
        <div className='mt-20 bg-white px-5 py-5 rounded-[20px]'>
            <div className='md:flex grid grid-cols-1'>
                <div className="">
                    <Image src={data.img} className="md:min-w-[450px] min-w-[100%]" alt="boat" width="450" height="350" />
                    {data.type && <div className='flex relative bottom-[45px] left-[20px]'>
                        <div className={
                        data.type == "DELUXE" ? 'px-5 py-2 bg-[#00FFF9] rounded-[20px]' 
                        : data.type == "LUXURY" ? "px-5 py-2 bg-[#FFD600] rounded-[20px]" 
                        : data.type == "PREMIUM" ? "px-5 py-2 bg-[#20FF79] rounded-[20px]" 
                        : "px-5 py-2 bg-white rounded-[20px]"}>
                            <p className='text-center text-black font-semibold poppins text-sm'>{data.type}</p>
                        </div>
                        <div className='flex ml-5 items-center'>
                            {starArray && starArray.map((_, i) => <UisStar key={i} className="text-white h-[20px]"/>)}
                        </div>
                    </div>}
                </div>
                <div className='md:px-10 px-5'>
                    <h1 className='mt-3 md:mt-0 text-[#1E3888] sm:text-center poppins text-xl font-semibold'>{data.title}</h1>
                    <p className='mt-10 font-semibold poppins '>{data.tag}</p>
                    <p className='mt-5 poppins'>{data.desc}</p>
                    <button className='mt-16 bg-[#1E3888] text-white text-center px-4 py-2 rounded-[20px]'>VIEW DETAILS</button>
                </div>
            </div>
        </div>
    )
}