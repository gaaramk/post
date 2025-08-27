import { Outlet } from "react-router-dom"
import UserCard from "../UserCard/UserCard"
import OptionSide from "../OptionSide/OptionSide"
import Navbar from "../Navbar/Navbar"


const HomeLayout = () => {
    return (
        <>
            <Navbar />

            <main>
                <div className="p-2 grid grid-cols-12 gap-5 text-center">

                    <div className="hidden lg:block lg:col-span-3">
                        <UserCard />
                    </div>

                    <div className="col-span-12 lg:col-span-6">
                        <Outlet />
                    </div>

                    <div className="hidden lg:block lg:col-span-3">
                        <OptionSide />
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomeLayout