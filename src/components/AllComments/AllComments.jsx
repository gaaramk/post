import { timeAgo } from "../../lib/utils"
import image from '../../assets/images/userUndefined.png'

const AllComments = ({ comments }) => {
    return (
        <>
            <div>
                <div className="relative flex flex-col gap-5 border-t border-gray-700">
                    {comments ? (
                        comments.map((comment) => (
                            <div className="flex flex-col gap-5 pt-7 pb-5 border-b border-gray-800">
                                {/* user profile */}
                                <div className="flex items-center gap-5">
                                    <figure className="w-14 h-12 md:w-18 md:h-16">
                                        <img
                                            src={
                                                comment?.commentCreator?.photo &&
                                                    !comment?.commentCreator?.photo.includes("undefined")
                                                    ? comment.commentCreator.photo
                                                    : `${image}`
                                            }
                                            alt={comment?.commentCreator?.name + "profile picture"}
                                            className="w-full h-full object-cover bg-white   rounded-full "
                                        />

                                    </figure>


                                    <figcaption className="text-start">
                                        <h2 className="font-bold text-lg text-white">
                                            {comment?.commentCreator?.name}
                                        </h2>

                                        <small className="text-gray-300 lowercase">@{comment?.commentCreator?.name}</small>
                                    </figcaption>
                                </div>

                                {/* comment */}
                                <div className="w-full flex flex-col items-end">
                                    <div className="bg-[#1a1a1a] text-white
                                w-full p-2 md:p-4 rounded-3xl relative">
                                        <div>
                                            <p className="text-start">
                                                {comment?.content}
                                            </p>


                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                                                {timeAgo(comment?.createdAt)}
                                            </span>

                                            <span className="absolute right-10 top-1/2 -translate-y-1/2 text-xl">
                                                <i className="fa-regular fa-heart cursor-pointer"></i>
                                            </span>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h2 className="text-white text-center capitalize font-bold">No comments yet</h2>
                    )}
                </div>
            </div>
        </>
    )
}

export default AllComments