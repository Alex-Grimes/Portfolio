import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#000000] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/23f030e6-10d8-4c58-9cfc-5d0ec99ced0f" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FFA600] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-6 '> Submit the form below or shoot me an email - <a href='mailto:alexgrimes.se@gmail.com'>alexgrimes.se@gmail.com</a></p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name'></input>
            <input className='bg-[#ccd6f6] p-2 my-4' type='email' placeholder='Email@gmail.com' name='email'></input>
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Enter Your Message Here...'></textarea>
            <button className='text-white border-2 hover:bg-[#FFA600] hover:border-[#FFA600] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact