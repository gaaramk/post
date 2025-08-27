
const AddRequest = () => {
    return (
        <>
            <div className="p-3 my-5 rounded-3xl bg-[#282828]">
                <div className="flex items-center gap-5">
                    <figure className="w-18">
                        <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            alt=""
                            className="w-full object-cover p-1 border rounded-full border-[#660033]"
                        />
                    </figure>

                    <figcaption className="w-full flex items-center justify-between">
                        <div>
                            <h2 className="font-bold">John Smith</h2>
                            <small className="text-gray-300">@johndoe</small>
                        </div>

                        <div>
                            <small>2h</small>
                        </div>
                    </figcaption>
                </div>

                {/* buttons */}
                <div className="flex items-center gap-5 py-5">
                    <button className="cursor-pointer bg-[#660033] w-full py-1 
                    rounded-full capitalize hover:bg-[#660033]/80">accept</button>
                    <button className="cursor-pointer bg-red-500 w-full py-1 
                    rounded-full capitalize hover:bg-red-500/80">remove</button>
                </div>
            </div>
        </>
    )
}

export default AddRequest