import { useCounter } from "../hooks/useCounter";


export const CounterWithCustomHook = () => {
    
    const {counter, increment, decrement, reset} = useCounter(27);
    
    return (
        <>
            <h1 className='text-4xl'>Counter with custom Hook: {counter}</h1>
            <hr />
            <button className='rounded-full bg-slate-200 p-2 m-4' onClick={() => increment()}>+1</button>
            <button className='rounded-full bg-slate-200 p-2 m-4' onClick={reset}>Reset</button>
            <button className='rounded-full bg-slate-200 p-2 m-4' onClick={() => decrement()}>-1</button>
        </>
    )
}
