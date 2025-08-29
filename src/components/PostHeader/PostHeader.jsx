import { timeAgo } from "../../lib/utils"
import image from '../../assets/images/userUndefined.png'

const PostHeader = ({ post }) => {
    return (
        <>
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
                            className="w-full object-cover p-1 border rounded-full"
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
                        {timeAgo(post?.createdAt)}
                    </span>
                </figcaption>
            </div>
        </>
    )
}

export default PostHeader