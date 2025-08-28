import Post from "../Post/Post"
import WhatDoYoThink from "../WhatDoYoThink/WhatDoYoThink"
import LoaderPage from "../LoaderPage/LoaderPage"
import { useQuery } from "@tanstack/react-query"
import { getAllPosts } from "../../lib/api"

const Home = () => {


    const { data, isLoading, error, isError, refetch } = useQuery({
        queryKey: ["allPosts"],
        queryFn: getAllPosts,
        gcTimeout: 1000 * 60 * 3,
    });

    if (isLoading) return <LoaderPage />;
    if (isError) return <div>{error.message}</div>;







    return (

        <>

                <section className="my-20">
                    <WhatDoYoThink />
                    {data?.data?.posts.map((post) => (
                        <Post key={post._id} post={post}  />
                    ))}
                </section>



        </>




    );
};

export default Home;
