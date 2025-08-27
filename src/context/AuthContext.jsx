import { createContext, useEffect, useState } from "react"




export const authContext = createContext()


const AuthContextProvider = ({ children }) => {

    const [token, setToken] = useState(function () {
        return localStorage.getItem('token')
    })


    function insertUserToken(token) {
        setToken(token)
    }

    function clearToken() {
        setToken(null)
    }

    return (
        <authContext.Provider value={{ insertUserToken, token, clearToken }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthContextProvider