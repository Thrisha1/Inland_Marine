import Link from "next/link"

export const NavBtn = ({name, to, path}) => {
    return (
        <li className={`text-[#1E3888] cursor-pointer poppins font-bold rounded-[5px] text-center px-3 py-1 ${path === "/designs" ? "bg-[#1E3888] text-white" : "bg-[#F9F9F9] hover:bg-[#1E3888] hover:text-[#F9F9F9]"}`}>
            <Link href={to}>{name}</Link>
        </li>
    )
}