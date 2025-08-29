import { useState } from 'react'
import image from '../../assets/images/userProfile.jpg'

const WhatDoYoThink = () => {
    const [open, setOpen] = useState(false)

    // open modal
    const handleOpen = () => {
        setOpen(!open)
        console.log(open);

    }


    return (
        <>

            {/* input */}
            <div className="w-full max-w-screen-xl mx-auto p-5 md:p-9
             bg-[#282828] rounded-2xl">
                <div className='w-full flex items-center gap-5'>
                    <div className='w-14 h-12 md:w-18 lg:h-16' >
                        <img src={image}
                            alt=""
                            className='w-full h-full object-cover p-1 border rounded-full
                            border-[#660033]'
                        />

                    </div>

                    <div className="w-full relative">
                        <input type="text"
                            className="bg-[#1a1a1a] text-white
                                w-full p-2 md:p-4 rounded-3xl 
                                focus:outline-none placeholder:text-gray-300
                                focus:placeholder:text-gray-400"

                            placeholder='Write a comment...'

                            onClick={handleOpen}
                        />

                        <i className="fa-solid fa-paper-plane cursor-pointer
                            absolute right-4 top-1/2 -translate-y-1/2"></i>
                    </div>
                </div>
            </div>


            {/* modal */}
            {open && <div className="bg-black/50 fixed
            top-0 left-0 right-0 bottom-0 z-[9999]">

                <div className='w-full h-full flex items-center justify-center'>


                    <div className='relative bg-[#1a1a1a] w-11/12 md:w-10/12 lg:w-1/2
                    rounded-2xl p-3 md:p-5 lg:p-9'>



                        <i className="fa-solid fa-xmark cursor-pointer
                                absolute right-4 top-4"
                            onClick={handleOpen}></i>


                        <div>
                            <h2 className="text-white text-2xl font-bold my-5">Write What Do You Think</h2>


                            <textarea className='bg-[#282828] text-white
                                w-full p-2 md:p-4 rounded-3xl 
                                focus:outline-none placeholder:text-gray-300
                                focus:placeholder:text-gray-400'
                                placeholder='What do you think?'
                                rows={7}

                            ></textarea>


                            <div className="flex items-center gap-5 py-5">
                                <button className="cursor-pointer bg-[#660033] w-full py-1 
                                rounded-full capitalize hover:bg-[#660033]/80">post</button>
                                <button className="cursor-pointer bg-red-500 w-full py-1 
                                rounded-full capitalize hover:bg-red-500/80"
                                    onClick={handleOpen}>cancel</button>
                            </div>
                        </div>


                    </div>
                </div>







            </div>}
        </>
    )
}

export default WhatDoYoThink