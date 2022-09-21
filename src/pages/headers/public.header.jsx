import React from 'react'
import { Theme } from "../../styles/theme.style"

const PublicHeader = () => {
    return (
        <div className={`w-full h-[90px] flex items-center px-[20px] ${Theme.Bg.header} ${Theme.Text.primary}`}>
            <div className="cursor-pointer no-select font-bold h-[100%] ml-[20px] flex items-center justify-center" onClick={() => moveto("")}>
                <div className={`absolute w-[50px] h-[50px] bg-transparent z-1 border-[6px] outline-none border-[#02f816] animate-spin-slow`}></div>
                <div className={`absolute w-[50px] h-[50px] bg-transparent z-1 border-[6px] outline-none border-[#ffffff] animate-spin-slower`}></div>
                <div className={`absolute w-[52px] h-[52px] bg-transparent rounded-[50%] z-1 border-[9px] outline-none border-[#3eeb12] animate-spin-slower`}></div>
                <span className="text-[#ffffff] text-[12px]">POS</span>
            </div>
        </div>
    )
}

export default PublicHeader