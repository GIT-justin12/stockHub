import { createContext } from "react";

export const IsRegisteredContext = createContext({
    isRegistered: false,
    setIsRegistered: () => {}
})