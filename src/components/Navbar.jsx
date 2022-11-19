import React from 'react'
import {AiFillQuestionCircle} from 'react-icons/ai'
const Navbar = () => {
    return (
        <div className='flex justify-between px-10 py-5'>
            <div className='flex'>
                <img src="https://i.ibb.co/kX6HtkF/efwfwefewf.png" />
                <p className='text-white text-xl font-[500]'>Petra</p>
            </div>
            <p className='flex items-center text-white text-xl font-[500]'><AiFillQuestionCircle className='mx-2'/> Help</p>
        </div>
    )
}

export default Navbar