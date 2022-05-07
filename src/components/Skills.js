import React from 'react'
 import JavasScript from '../assets/javascript.png'
 import ReactImg from '../assets/react.png'
 import Node from '../assets/node.png'
 import GitHub from '../assets/github.png'
 import Mongo from '../assets/mongo.png'

const Skills = () => {
  return (
    <div name ='skills' className='w-full h-screen bg-[#000000]  text-gray-300 '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#FFA600]'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with </p>
            </div>

            <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-gray-300 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavasScript} alt="JavaScript icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-gray-300 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-gray-300 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                    <p className='my-4'>Node.js</p>
                </div>
                <div  className='shadow-md shadow-gray-300 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-gray-300 hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon" />
                    <p className='my-4'>MongoDB</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills