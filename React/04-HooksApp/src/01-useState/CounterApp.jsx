import { useState } from 'react'


export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    const {counter1, counter2, counter3} = state

  return (
    <>
        <h1 className='text-4xl'>Counter1: {counter1}</h1>
        <h1 className='text-4xl'>Counter2: {counter2}</h1>
        <h1 className='text-4xl'>Counter3: {counter3}</h1>
        <br /> <hr /> <br />
        <button className='rounded-full bg-slate-200 p-2' onClick={ () => setCounter({...state, counter1: counter1 + 1}) }>+1</button>
    </>
  )
}
