import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//Custom Hook

//!En los custom hooks generalmente se almacena la lógica de los functional components

export const useFetchGifs = (category) => {
    const [images, setimages] = useState([])

    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setimages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
       getImages();
    }, [])


    return {
        images, 
        isLoading
    }
}