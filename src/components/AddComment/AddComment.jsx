import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"

const AddComment = ({ post }) => {
    const [commentValue, setCommentValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)




    const handleCommentSubmit = () => {

        const commentData = {
            content: commentValue,
            post: post._id
        }

        setIsLoading(true)

        axios.post(`https://linked-posts.routemisr.com/comments`, commentData, {
            headers: {
                token: localStorage.getItem('token'),
            }
        })
            .then((res) => {
                toast.success(res.data.message, { position: 'bottom-right' });
                setCommentValue('');

            }).catch((err) => {
                toast.error(err.response.data.error, { position: 'bottom-right' });
                console.log(err, 'err from add comment');
            }).finally(() => {
                setIsLoading(false)
            })

    }


    // click enter 
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommentSubmit()
        }
    }





    return (
        <>
            <div className="w-full py-5">
                {/* input */}
                <div className="w-full relative">
                    <input
                        name="comment"
                        type="text"
                        className="bg-[#1a1a1a] text-white
                                    w-full p-2 md:p-4 rounded-3xl 
                                    focus:outline-none placeholder:text-gray-300
                                    focus:placeholder:text-gray-400
                                    shadow-md shadow-[#660033]"

                        placeholder='Write a comment...'
                        onChange={
                            (e) => setCommentValue(e.target.value)
                        }
                        onKeyDown={handleKeyDown}
                        value={commentValue}
                    />

                    <span className="absolute right-4 top-1/2 -translate-y-1/2 
                    cursor-pointer" onClick={handleCommentSubmit}>
                        {isLoading ? <i className="fa fa-spinner fa-spin"></i>
                            : <i className="fa fa-paper-plane"></i>}
                    </span>
                </div>

            </div>
        </>
    )
}

export default AddComment