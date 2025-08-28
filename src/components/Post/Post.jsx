import { timeAgo } from "../../lib/utils";
import image from '../../assets/images/userUndefined.png'


const Post = ({ post }) => {




    const firstComment = post.comments?.[0];



    return (
        <>
            <div className=" w-full my-12 rounded-3xl max-w-screen-xl 
             bg-[#282828]">

                <div className="p-5 md:p-9">

                    {/* user */}
                    <div className="flex items-center gap-5">
                        <figure className="w-14 h-12 md:w-18 md:h-16">
                            {post.user.photo ? (
                                <img src={post.user.photo}
                                    alt={`${post.user.name} profile picture`}
                                    className="w-full h-full object-cover  rounded-full
                                "
                                />
                            ) : (
                                <img src={image}
                                    alt={`${post.user.name} profile picture`}
                                    className="w-full object-cover p-1 border rounded-full
                                "
                                />
                            )}
                        </figure>

                        <figcaption className="w-full capitalize text-gray-300 
                        flex items-center justify-between relative">
                            <div className="text-start">
                                <small className="lowercase">@{post.user.name}</small>
                                <h2 className="font-bold text-lg text-white">{post.user.name}</h2>
                            </div>

                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                                {timeAgo(firstComment?.createdAt)}
                            </span>
                        </figcaption>
                    </div>

                    {/* post */}
                    <div className="pt-9">
                        {post.body && <p className="text-white text-lg text-start mb-5">
                            {post.body}
                        </p>}

                        {post.image && <img src={post.image}
                            alt={`${post.user.name} post`}
                            className="w-full object-cover"
                        />}
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
                    <div className="flex flex-col gap-5">
                        {/* first comment */}
                        {firstComment && (
                            <div className="flex items-center gap-5 border-t pt-5">
                                {/* user profile */}
                                <div className="flex items-center gap-5 w-1/3">
                                    <figure className="w-14 h-12 md:w-18 md:h-16">
                                        <img
                                            src={
                                                firstComment?.commentCreator?.photo &&
                                                    !firstComment?.commentCreator?.photo.includes("undefined")
                                                    ? firstComment.commentCreator.photo
                                                    : `${image}`
                                            }
                                            alt={firstComment?.commentCreator?.name + "profile picture"}
                                            className="w-full h-full object-cover bg-white   rounded-full "
                                        />

                                    </figure>


                                    <figcaption className="text-start">
                                        <h2 className="font-bold text-lg text-white">
                                            {firstComment?.commentCreator?.name}
                                        </h2>

                                        <small className="text-gray-300 lowercase">@{firstComment?.commentCreator?.name}</small>
                                    </figcaption>
                                </div>

                                {/* comment */}
                                <div className="bg-[#1a1a1a] text-white
                                w-full p-2 md:p-4 rounded-3xl relative">



                                    <div>
                                        <p className="text-start">
                                            {firstComment?.content}
                                        </p>


                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                                            {timeAgo(firstComment?.createdAt)}
                                        </span>

                                    </div>


                                </div>
                            </div>
                        )}

                        <p className="w-fit text-lg text-gray-300 cursor-pointer text-start
                        hover:text-gray-400 capitalize"
                        >
                            view all comments...
                        </p>

                        {/* add comment */}
                        <div className="flex items-center gap-5">
                            {/* user profile picture */}
                            <figure className="w-14 h-12 md:w-18 md:h-16">
                                {post.user.photo ? (
                                    <img src={post.user.photo}
                                        alt={post.user.name + "profile picture"}
                                        className="w-full h-full object-cover rounded-full
                                "
                                    />
                                ) : (
                                    <img src={image}
                                        alt={post.user.name + "profile picture"}
                                        className="w-full object-cover rounded-full
                                "
                                    />
                                )}
                            </figure>

                            {/* input */}
                            <div className="w-full relative">
                                <input type="text"
                                    className="bg-[#1a1a1a] text-white
                                w-full p-2 md:p-4 rounded-3xl 
                                focus:outline-none placeholder:text-gray-300
                                focus:placeholder:text-gray-400
                                shadow-md shadow-[#660033]"

                                    placeholder='Write a comment...'
                                />

                                <i className="fa-regular fa-paper-plane cursor-pointer
                            absolute right-4 top-1/2 -translate-y-1/2"></i>
                            </div>

                        </div>
                    </div>

                </div>

            </div >


        </>
    )
}

export default Post