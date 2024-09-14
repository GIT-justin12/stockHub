import React from 'react'
import Header from '../components/header'
import SideBar from '../components/sideBar'
import HomeContent from '../components/homeContent'


const Home = () => {


    return (
        <div className='h-screen'>
           <Header />
           <div className='h-92 flex flex-col sm:flex-row'>
                <SideBar />
                <HomeContent />
            </div>
        </div>
    )
}

export default Home