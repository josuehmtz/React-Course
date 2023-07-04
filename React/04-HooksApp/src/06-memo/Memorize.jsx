import { useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./Small"

export const Memorize = () => {

    const {increment, counter} = useCounter()

    const [show, setShow] = useState(true)

    return (
        <>
            <h1 className="text-5xl m-4">Counter: <Small value={counter}/></h1>
            <button className="rounded-md bg-indigo-500 text-white m-4 p-3" onClick={() => increment()}>+1</button>
            <button className="rounded-md bg-red-500 text-white m-4 p-3" onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
        </>
    )
}
