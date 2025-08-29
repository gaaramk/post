import { ClipLoader } from "react-spinners";

const LoaderPage = () => {
    return (
        <>
            <section className="bg-black absolute top-0 left-0 bottom-0 right-0 
            flex items-center justify-center z-[9999999]">
                <ClipLoader
                    color="#fff"

                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </section>
        </>
    )
}

export default LoaderPage