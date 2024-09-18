import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    

    return (
        <nav className='h-full bg-t-blue flex sm:basis-2/12 flex-col py-8 gap-8 text-p-blue'>
            <Link to="/iventory" className='link'>
                <span className="dashicons--welcome-view-site link-icon"></span>
                <span>Iventaire</span>
            </Link>
            <Link to="/article" className='link'>
                <span className="eos-icons--products-outlined link-icon"></span>
                <span>Article</span>
            </Link>
            <Link to="/sell" className='link'>
                <span className="bxs--shopping-bags link-icon"></span>
                <span>Ventes</span>
            </Link>
            <Link to="/buy" className='link'>
                <span className="entypo--shopping-bag link-icon"></span>
                <span>Provisions</span>
            </Link>
            <Link to="/logout" className='mt-auto link'>
                <span className="quill--off link-icon"></span>
                <span>Déconnexion</span>
            </Link>
        </nav>
    )
}
export default SideBar