import AddRequest from "../AddRequest/AddRequest"

const OptionSide = () => {
    return (
        <>
            <div className="fixed right-10 top-20 w-[370px] bg-[#1a1a1a] 
            rounded-2xl text-start p-3">
                <h2 className="text-white text-2xl font-bold my-5">Recent Activity</h2>

                <div>
                    <AddRequest />

                    <AddRequest />

                    <AddRequest />

                    <AddRequest />


                </div>
            </div>
        </>
    )
}

export default OptionSide