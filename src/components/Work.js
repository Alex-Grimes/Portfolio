import React from 'react'
import crypto from '../assets/crypto.png'
import chat from '../assets/chat.png'
import sm from '../assets/sm.png'
import blog from '../assets/blog.png'
import todo from '../assets/todo.png'
import weather from '../assets/weather.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#000000]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#FFA600]'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>
        
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div style={{backgroundImage: `url(${chat})`}} className='shadow-lg shadow-gray-300 group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        RoR Chat Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='/' target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/Alex-Grimes/chatapp' target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                </div>
            </div>
        </div>

            <div style={{backgroundImage: `url(${blog})`}} className='shadow-lg shadow-gray-300 group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        JS Blog Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/Alex-Grimes/markdown-blog' target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>

                </div>
            </div>
        </div>

            <div style={{backgroundImage: `url(${sm})`}} className='shadow-lg shadow-gray-300 group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React Social Media Site
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/Alex-Grimes/MERNG' target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>

 
                </div>
            </div>
        </div>

            <div style={{backgroundImage: `url(${crypto})`}} className='shadow-lg shadow-gray-300 group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        RoR Crypto Tracker
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/Alex-Grimes/Ruby-crypto-calculator' target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>

                </div>
            </div>
        </div>
            <div style={{backgroundImage: `url(${weather})`}} className='shadow-lg shadow-gray-300 group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        JS Weather Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/Alex-Grimes/weatherapp' target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                </div>
            </div>
        </div>
            <div style={{backgroundImage: `url(${todo})`}} className='shadow-lg shadow-gray-300 group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        TS Todo Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/Alex-Grimes/Angular-Todo' target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

  )
}

export default Work
