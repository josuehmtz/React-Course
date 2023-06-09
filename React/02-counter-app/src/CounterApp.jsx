import { useState } from 'react';
import PropTypes from 'prop-types';



export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState( value    )

    const handleAdd  = () => {
        // setCounter(counter + 1 )
        setCounter( (c) => c + 1)
    }
    
    const handleSubtract  = () => {
        setCounter( (c) => c - 1)
    }
    
    const handleReset  = () => {
        setCounter( value )
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2> { counter } </h2>
            <button className='bg-blue-500 hover:bg-blue-700' onClick={ handleAdd }>+1</button>
            <button onClick={ handleSubtract }>-1</button>
            <button onClick={ handleReset }>Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
