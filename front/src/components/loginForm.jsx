import React, { useContext, useEffect, useState } from 'react'
import { IsRegisteredContext } from '../context/isRegisteredContext'

const LoginForm = () => {

    //const [isRegistered, setIsRegistered] = useState(false)
    const [title, setTitle] = useState()
    const {isRegistered, setIsRegistered} = useContext(IsRegisteredContext)

    const registration = (signal) => {
        setIsRegistered(signal ? true : false)
        setTitle(signal ? "Inscription" : "Connexion")
    }

    useEffect(() => {
        registration(isRegistered)
    }, [isRegistered])

    return (
        <form action="" className="flex flex-col gap-2 p-5">
            <h2 className="text-center mb-2 text-p-blue text-2xl font-bold">{title}</h2>
            <label htmlFor="name">Nom</label>
            <input type="text" id='name' className="login-input login-input-focus" placeholder='Entrer votre nom'/>
            <label htmlFor="password">Mot de passe</label>
            <input type="text" id='password' className="login-input login-input-focus" placeholder='Entrer votre mot de passe'/>
            {
                isRegistered ? (<>
                    <label htmlFor="confirm">confirmation</label>
                <input type="text" id='confirm' className="login-input login-input-focus" placeholder='Entrer votre mot de passe'/>
                    <p className='text-xs text-center mt-2 mb-4'>Vous avez déjà un compte ! <span className='login-shortcut' 
                    onClick={() => registration(false)}>Connectez-vous !</span></p>
                </>
                ) : (
                    <p className='text-xs text-center mt-2 mb-4'>Vous n'avez pas de compte ! <span className='login-shortcut' 
                    onClick={() => registration(true)}>Inscrivez-vous !</span></p>
                )
            }
            <button>
                <input type="submit" className="bg-p-blue w-30 px-8 py-1 rounded-full text-white cursor-pointer font-medium"/>
            </button>
        </form>
    )
}

export default LoginForm