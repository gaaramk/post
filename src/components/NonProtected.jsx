import { Navigate } from "react-router-dom"

const NonProtected = ({ children }) => {

    if (localStorage.getItem('token') !== null) {
        return <Navigate to="/" />
    }



    return (
        children
    )
}

export default NonProtected