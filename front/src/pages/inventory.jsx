import React from 'react'
import Header from '../components/header'
import SideBar from '../components/sideBar'


const Iventory = () => {


    return (
        <div className='h-screen'>
           <Header />
           <div className='h-92 flex flex-col sm:flex-row'>
                <SideBar />
                <section className='flex sm:basis-10/12 justify-center items-center'>
                    <p className='flex text-3xl justify-around gap-2'>Bienvenue sur la page<span className='text-p-blue font-semibold'>inventaire</span></p>
                </section>
            </div>
        </div>
    )
}

export default Iventory