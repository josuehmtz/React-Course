import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifCard } from "./GifCard";
import { PropTypes } from "prop-types";

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category);
    
    return (
        <>
            <h3 className="tracking-widest p-3 text-3xl text-bold">{category}</h3>
            {
                isLoading && ( <h2 className="text-6xl">Loading...</h2> )
            }
            <div className="flex flex-wrap gap-6 flex-auto">
                {
                    images.map((image) => (
                        <GifCard key={image.id} {...image}/>
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

