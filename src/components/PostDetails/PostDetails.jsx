import { Link, useParams } from "react-router-dom"
import { getSinglePost } from "../../lib/api";
import { useQuery } from "@tanstack/react-query"
import LoaderPage from "../LoaderPage/LoaderPage";
import PostHeader from "../PostHeader/PostHeader";
import AllComments from "../AllComments/AllComments";
import AddComment from "../AddComment/AddComment";


const PostDetails = () => {

    const { id } = useParams();

    const { data, isLoading, error, isError } = useQuery({
        queryKey: ["singlePost", id],
        queryFn: () => getSinglePost(id),
    });
    if (isLoading) return <LoaderPage />;
    if (isError) return <div>{error.message}</div>;
    const post = data?.data?.post;
    const comments = data?.data?.post.comments;





    return (
        <>
            <section className="my-20">

                <div className="relative w-full my-12 rounded-3xl  
             bg-[#282828]">

                    <div className="p-5 md:p-9">
                        {/* user */}
                        <div>
                            <PostHeader post={post} />
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
                        <div>
                            <div>
                                <AddComment post={post} />
                            </div>


                            <AllComments
                                comments={comments}
                                post={post} />
                        </div>
                    </div>


                    {/* close */}
                    <Link className="absolute right-5 top-5 text-2xl" to="/">
                        <i className="fa-solid fa-xmark hover:text-gray-400 cursor-pointer"></i>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default PostDetails