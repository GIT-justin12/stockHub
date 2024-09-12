import React from "react"
import logo from '../assets/logo.png'
import profile from '../assets/user.svg'

const Header = () => {
    return (
        <header className='flex items-center px-6 py-2 drop-shadow-md shadow-[#d5d5d5] border-b-2'>
            <div className='mr-auto'><img className='h-8' src={logo} alt="Logo de stockHub" /></div>
            <div className='flex items-end justify-center'><span className=''>Justin </span> <img className='h-8' src={profile} alt="Icon de profile" /></div>
        </header>
    )
}

export default Header