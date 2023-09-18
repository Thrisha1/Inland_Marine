import Link from "next/link"
import Image from "next/image"

export const NavBtn = ({navReducer,name, to, path}) => {
    return (
        <Link onClick={()=>{navReducer()}} href={to} className={`text-[#1E3888] cursor-pointer poppins font-bold rounded-[5px] text-center px-3 py-1 ${path === to ? "bg-[#1E3888] text-white" : "bg-[#F9F9F9] hover:bg-[#1E3888] hover:text-[#F9F9F9]"}`}>
            <p className="w-max" href={to}>{name}</p>
        </Link>
    )
}

export const Headline = ({name}) => {
    return(
        <>
            <h1 className='text-5xl !font-[900] poppins text-center text-[#1E3888]'>{name}</h1>
        </>
    )
}

export const Subline = ({para}) => {
    return(
        <>
            <p className='text-[#0B0B0B] poppins md:px-20 px-5 text-center'>{para}</p>
        </>
    )
}

export const ImgBanner = ({img}) => {
    return(
        <div className='mt-20'>
            <Image src={img} className='w-[100%] md:h-[500px] h-[350px]' />
        </div>
    )
}






