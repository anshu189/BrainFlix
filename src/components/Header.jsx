import React from 'react'
import logo from '../assets/logo.svg'
import searchicon from '../assets/search.svg' 
import uploadicon from '../assets/upload.svg' 
import pfpicon from '../assets/pfp.svg' 

const Header = () => {
  return (
    <div className='md:max-xl:w-[90%] max-sm:pb-6 max-sm:flex-col max-sm:w-[100%] w-[80%] py-2 flex items-center justify-between'>
        <div className='flex items-center'>
            <img src={logo} alt="BrainFlix" className='max-sm:w-20 w-14'/>
            <div className="text-xl font-medium">BrainFlix</div>
        </div>
        <div className="max-sm:w-[90%] max-sm:gap-4 max-sm:flex-col flex items-center gap-6">
            <div className='max-sm:w-full flex items-center relative'>
                <img src={searchicon} alt="" className='w-6 absolute ml-4'/>
                <input type="text" name="" id="" placeholder='Search' className='w-[100%] py-[10px] outline-none px-8 pl-12 border-[1px] border-[#999999] rounded-md duration-500 hover:ring-2'/>
                <div className='max-sm:block hidden flex items-center relative ml-4'>
                    <a href='/' ><img src={pfpicon} alt="" className='max-sm:w-12 max-sm:h-10  w-12 shadow-[inset_0_0_8px_0_rgba(0,0,0,0.2)] h-12 border-none outline-none cursor-pointer rounded-full'/></a>
                </div>
            </div>
            <div className='max-sm:w-full flex items-center relative'>
                <img src={uploadicon} alt="" className='w-4 absolute ml-4'/>
                <a href='/' className='w-[100%] py-[10px] px-12 bg-[#0095FF] text-white font-medium border-none cursor-pointer duration-500 hover:shadow-[0_5px_10px_0_rgba(0,0,0,0.15)] outline-none border-[1px] border-[#999999] rounded-md'>UPLOAD</a>
            </div>
            <div className='max-sm:hidden flex items-center relative ml-4'>
                <a href='/' ><img src={pfpicon} alt="" className='w-12 shadow-[inset_0_0_8px_0_rgba(0,0,0,0.2)] h-12 border-none outline-none cursor-pointer rounded-full'/></a>
            </div>
        </div>
    </div>
  )
}

export default Header