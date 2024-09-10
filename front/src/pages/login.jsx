import React, { useState } from 'react'
import registeredImg from '../assets/signin.svg'
import loginImg from '../assets/signout.svg'
import LoginForm from '../components/loginForm'
import { IsRegisteredContext } from '../context/isRegisteredContext'


const Login = () => {

    const [isRegistered, setIsRegistered] = useState(false)

    const isRegisteredContextValue = {
        isRegistered: isRegistered,
        setIsRegistered: setIsRegistered
    }
    
    return (
        < >
            <IsRegisteredContext.Provider value={isRegisteredContextValue}>
                <div className="h-lvh flex flex-col md:flex-row">
                    <div className="flex basis-full md:basis-6/12 bg-t-blue justify-center items-center flex-col">
                        <LoginForm />
                    </div>
                    <div className="hidden md:flex basis-6/12 bg-s-blue/50 items-center justify-center py-10 px-5">
                        <div className="max-w-96 max-h-xlg"><img src={isRegistered ? registeredImg : loginImg} alt="Image de la connexion" className='w-full h-full'/></div>
                    </div>
                </div>
            </IsRegisteredContext.Provider>
        </>
    )
}

export default Login