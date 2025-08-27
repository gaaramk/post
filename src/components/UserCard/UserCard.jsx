
const UserCard = () => {
    return (
        <>
            <div className="fixed left-10 top-20 w-[370px] bg-[#1a1a1a] rounded-2xl">
                <div className="p-9">

                    {/* profile */}
                    <div className="relative">
                        {/* cover */}
                        <div>
                            <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="" />
                        </div>

                        {/* profile */}
                        <div className="absolute bottom-[-50%] right-[50%] 
                        translate-x-1/2">
                            <figure className="w-32 mx-auto">
                                <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                    alt=""
                                    className="w-full object-cover p-1 border rounded-xl 
                                border-[#660033]"
                                />
                            </figure>

                            <figcaption className="text-center capitalize py-5">
                                <h2 className="font-bold text-lg text-white">John Doe</h2>
                                <small className="text-gray-300">@johndoe</small>
                            </figcaption>
                        </div>
                    </div>


                    {/* follow */}
                    <div className="flex items-center justify-between mt-5">
                        <div className="flex flex-col items-center">
                            <small className="text-gray-300 capitalize">Following</small>
                            <span className="text-lg">5</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <small className="text-gray-300 capitalize">Followers</small>
                            <span className="text-lg">5</span>
                        </div>
                    </div>

                    {/* bio */}
                    <div className="mt-16 py-5">
                        <p className="text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Beatae esse voluptates
                        </p>
                    </div>

                    {/* button */}
                    <div>
                        <button className="w-full bg-[#660033] text-white 
                        text-lg font-bold px-7 py-3 rounded-full cursor-pointer
                        hover:bg-[#660033]/80">
                            Follow
                        </button>
                    </div>


                </div>
            </div>
        </>
    )
}

export default UserCard