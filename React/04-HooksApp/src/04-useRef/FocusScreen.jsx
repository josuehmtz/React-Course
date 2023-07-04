import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef([['nombre']])

    const onClick = () => {
        // document.getElementById('name').select()
        inputRef.current.select()
    }

  return (
    <>
        <h1 className='text-5xl m-4'>Focus Screen</h1>
        <hr />
        <input 
            type="text" 
            ref={inputRef} 
            className='rounded-md m-4 p-3 border-2 border-gray-870 drop-shadow-xl' 
            placeholder='Ingrese su nombre...'
        />
        <button 
            className="rounded-md bg-blue-600 text-white m-4 p-3 drop-shadow-md hover:bg-sky-700" 
            onClick={onClick}>
            Set Focus
        </button>
    </>
  )
}
