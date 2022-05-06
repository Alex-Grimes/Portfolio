import { iconButtonClasses } from '@mui/material'
import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
    return (
        <div name ='home' className='w-full h-screen bg-[#000000]'>

            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#FFA600]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Alex Grimes</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]' > I am a Software Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full-stack developer devloper specializing in building exceptional digital experinces. Currently, my focus is on solving problems with full-stack web applications</p>
                <div>
                    <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FFA600] hover:border-[#FFA600]'>View Work <HiArrowNarrowRight className='ml-3 hover:'/></button>
                </div>
            </div>

        </div>
    )
}

export default Home