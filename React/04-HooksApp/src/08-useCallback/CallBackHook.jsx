import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10)

    const incrementFather = useCallback(
      (value) => {
        setCounter( (c) => c + value )
        
        //? Se usa un callback dentro del useState para que detecte el cambio dentro del state
      
    },
      [],
    )
    
    //   useEffect(() => {
    //     incrementFather()
    //   }, [incrementFather])

    //! se crea un espacio en memoria por cada hook cada vez que se renderiza
      

    return (
    <>
        <h1 className="text-4xl">useCounter: {counter}</h1>
        <hr />
        <ShowIncrement increment={incrementFather}/>       
    </>
    )
}
