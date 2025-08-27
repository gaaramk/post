
const Post = () => {
    return (
        <>
            <div className=" w-full my-12 rounded-3xl max-w-screen-xl 
             bg-[#282828]">
                <div className="p-5 md:p-9">
                    {/* user */}
                    <div className="flex items-center gap-5">
                        <figure className="w-18">
                            <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                alt=""
                                className="w-full object-cover p-1 border rounded-full
                                border-[#660033]"
                            />
                        </figure>

                        <figcaption className="w-full capitalize text-gray-300 
                        flex items-center justify-between">
                            <div className="text-start">
                                <small>@johndoe</small>
                                <h2 className="font-bold text-lg text-white">John Doe</h2>
                            </div>

                            <div>
                                <span>2h</span>
                            </div>
                        </figcaption>
                    </div>

                    {/* post */}
                    <div className="pt-9">
                        <p className="text-white text-lg text-start mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                        </p>

                        <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            alt=""
                            className="w-full object-cover"
                        />
                    </div>


                    {/* icons */}
                    <div className="flex items-center justify-between my-5 text-2xl">
                        <div className="flex items-center gap-5">
                            <i className="fa-regular fa-heart cursor-pointer"></i>
                            <i className="fa-regular fa-comment cursor-pointer"></i>
                            <i className="fa-regular fa-share-from-square cursor-pointer"></i>
                        </div>

                        <div>
                            <i className="fa-regular fa-bookmark"></i>
                        </div>

                    </div>

                    {/* comments */}
                    <div className="flex items-center gap-5 border-t pt-5">
                        <figure className="w-14 md:w-18">
                            <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                alt=""
                                className="w-full object-cover p-1 border rounded-full border-[#660033]"
                            />
                        </figure>

                        <div className="w-full relative">
                            <input type="text"
                                className="bg-[#1a1a1a] text-white
                                w-full p-2 md:p-4 rounded-3xl 
                                focus:outline-none placeholder:text-gray-300
                                focus:placeholder:text-gray-400"

                                placeholder='Write a comment...'
                            />

                            <i className="fa-regular fa-paper-plane cursor-pointer
                            absolute right-4 top-1/2 -translate-y-1/2"></i>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Post