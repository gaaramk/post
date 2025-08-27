import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Toaster } from "react-hot-toast"

const Layout = () => {
    return (
        <>

            <Navbar />

            <main className="my-20 w-[90%] mx-auto">
                <Outlet />

                <Toaster />
            </main>

            <Footer />
        </>
    )
}

export default Layout