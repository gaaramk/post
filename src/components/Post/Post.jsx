import { useState } from "react";
import AddComment from "../AddComment/AddComment";
import FirstComment from "../FirstComment/FirstComment";
import PostHeader from "../PostHeader/PostHeader";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const Post = ({ post }) => {
    const [isLike, setIsLike] = useState(false)
    const [isSave, setIsSave] = useState(false)





    const firstComment = post.comments?.[0];



    return (
        <>
            <div className=" w-full my-12 rounded-3xl  
             bg-[#282828]">

                <div className="p-5 md:p-9">

                    {/* user */}
                    <div>
                        <PostHeader post={post} firstComment={firstComment} />
                    </div>

                    {/* post */}
                    <div className="pt-9">
                        {post.body && <p className="text-white text-lg text-start mb-5">
                            {post.body}
                        </p>}

                        {post.image && <Link to={`/post/${post._id}`}>
                            <img src={post.image}
                                alt={`${post.user.name} post`}
                                className="w-full object-cover"
                            />
                        </Link>}
                    </div>


                    {/* icons */}
                    <div className="flex items-center justify-between my-5 text-2xl">
                        <div className="flex items-center gap-5">


                            {isLike ? (
                                <i className="fa-solid fa-heart text-red-500 cursor-pointer"
                                    onClick={() => setIsLike(!isLike)}
                                ></i>
                            ) : (
                                <i className="fa-regular fa-heart cursor-pointer"
                                    onClick={() => setIsLike(!isLike)}
                                ></i>
                            )}


                            <label htmlFor="comment">
                                <i className="fa-regular fa-comment cursor-pointer"></i>
                            </label>


                            <i className="fa-regular fa-share-from-square cursor-pointer"></i>
                        </div>

                        <div>

                            {isSave ? (
                                <i className="fa-solid fa-bookmark text-white cursor-pointer"
                                    onClick={() => {
                                        setIsSave(!isSave)
                                        toast.success('Post saved successfully', { position: 'bottom-right' })
                                    }}
                                ></i>
                            ) : (
                                <i className="fa-regular fa-bookmark cursor-pointer"
                                    onClick={() => {
                                        setIsSave(!isSave)
                                        toast.success('Post saved successfully', { position: 'bottom-right' })
                                    }}
                                ></i>
                            )}

                        </div>

                    </div>

                    {/* comments */}
                    <div>
                        <FirstComment post={post} firstComment={firstComment} />
                        <AddComment post={post} />
                    </div>

                </div>

            </div >


        </>
    )
}

export default Post