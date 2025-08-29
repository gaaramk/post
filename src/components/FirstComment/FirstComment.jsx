import { Link } from 'react-router-dom'
import image from '../../assets/images/userUndefined.png'
import { timeAgo } from '../../lib/utils'

const FirstComment = ({ post, firstComment }) => {
    return (
        <>
            <div className="flex flex-col gap-5 py-3">
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

                <Link to={`/post/${post._id}`} className="w-fit text-lg text-gray-300 cursor-pointer text-start
                        hover:text-gray-400 capitalize"
                >
                    view all comments...
                </Link>

            </div>
        </>
    )
}

export default FirstComment