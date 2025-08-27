import Post from "../Post/Post"
import WhatDoYoThink from "../WhatDoYoThink/WhatDoYoThink"

const Home = () => {
    return (
        <>
            <section className="my-20">

                <WhatDoYoThink />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />

            </section>
        </>
    )
}

export default Home