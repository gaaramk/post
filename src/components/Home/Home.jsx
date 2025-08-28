import Post from "../Post/Post"
import WhatDoYoThink from "../WhatDoYoThink/WhatDoYoThink"
import LoaderPage from "../LoaderPage/LoaderPage"
import { useQuery } from "@tanstack/react-query"
import { getAllPosts } from "../../lib/api"
import PullToRefresh from "react-simple-pull-to-refresh"

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
            <PullToRefresh
                onRefresh={refetch}
                pullDownContent={<h3 className="text-gray-500">⬇️ Pull to refresh</h3>}
                releaseContent={<h3 className="text-gray-500">↕️ Release to refresh</h3>}
                refreshContent={<LoaderPage />}
            >
                <section className="my-20">
                    <WhatDoYoThink />
                    {data?.data?.posts.map((post) => (
                        <Post key={post._id} post={post}  />
                    ))}
                </section>
            </PullToRefresh>



        </>




    );
};

export default Home;
