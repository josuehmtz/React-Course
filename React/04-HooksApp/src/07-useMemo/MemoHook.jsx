import { useMemo, useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "../06-memo/Small"

const heavyStuff = (iterationNumber = 100) => { 
    for (let index = 0; index < iterationNumber; index++) {
        console.log('Ahi vamos')
    }
    return `${iterationNumber} iteraciones realizadas`
}

export const MemoHook = () => {

    const {increment, counter} = useCounter()
    
    const memorizeValue = useMemo(() => heavyStuff(counter), [counter])


    const [show, setShow] = useState(true)

    return (
        <>
            <h4>{memorizeValue}</h4>
            <h1 className="text-5xl m-4">Counter: <Small value={counter}/></h1>
            <button className="rounded-md bg-indigo-500 text-white m-4 p-3" onClick={() => increment()}>+1</button>
            <button className="rounded-md bg-red-500 text-white m-4 p-3" onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
        </>
    )
}
