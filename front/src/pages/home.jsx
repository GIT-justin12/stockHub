import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'
import SideBar from '../components/sideBar'


const Home = () => {


    return (
        <div className='h-screen'>
           <Header />
           <div className='h-92 flex flex-col sm:flex-row'>
                <SideBar />
                <section className='bg-gray-100 sm:basis-10/12'>
                </section>
            </div>
        </div>
    )
}

export default Home