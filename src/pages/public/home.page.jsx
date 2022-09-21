import React from 'react'

const HomePage = () => {
    return (
        <main className="w-full h-full text-[20px] text-[#331766] flex justify-center items-center isolate relative">
            <div className="w-[350px] h-[350px] relative overflow-hidden rounded-[50px] border border-1 border-[#ffffff] neubrutalism">
                <div className="w-[350px] h-[350px] bg-[#f11569] border border-1 border-[#ffffff] opacity-50 origin-center rotate-[80deg] z-[1] absolute"></div>
                <div className="w-[350px] h-[350px] bg-[#ec540e] border border-1 border-[#ffffff] opacity-80 origin-center rotate-[60deg] z-[1] absolute"></div>
                <div className="w-[350px] h-[350px] bg-[#3ed610] border border-1 border-[#ffffff] opacity-80 origin-center rotate-[40deg] z-[1] absolute"></div>
                <div className="w-[350px] h-[350px] bg-[#f5c010] border border-1 border-[#ffffff] opacity-50 origin-center rotate-[20deg] z-[1] absolute"></div>
                <div className="w-[350px] h-[350px] bg-[#c112e4] border border-1 border-[#ffffff] opacity-30 origin-center rotate-[0deg] z-[1] absolute"></div>
                <div className="w-[350px] h-[350px] bg-transparent flex flex-col justify-center items-center font-bold leading-[45px] absolute">
                    <div className="text-[30px] z-[1] no-select text-[#ffffff]">&lt;Point of Sale&gt;</div>
                </div>
            </div>
        </main>
    )
}

export default HomePage