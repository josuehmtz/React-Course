export const GifGrid = ({category}) => {

    const gifs = [1,2,3,4,5];

    return (
        <>
            <h3 className="tracking-widest p-3 text-4xl text-bold">{category}</h3>
            {
                gifs.map( gif => (
                    <p key={gif} className="pl-3 pb-2">{gif}</p>
                ))
            }
        </>
    )
}
