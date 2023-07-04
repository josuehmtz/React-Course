import { useLayoutEffect, useRef, useState } from "react"

export const QuoteBlock = ({quote, author}) => {


    const pRef = useRef()
    const [boxSize, setBoxSize] = useState({width: 0, height: 0 })

    useLayoutEffect(() => {
        const {height, width} = pRef.current.getBoundingClientRect()
        setBoxSize({height, width})
    }, [quote])

    return (
        <>
            <blockquote    
                className='text-end m-5 p-3'
                style={{display: 'flex'}}
                >
                <p ref={pRef} className='mb-1 text-2xl'>{quote}</p>
                <footer className='blockquote-footer text-sm text-gray-500'> — {author}</footer>
            </blockquote>
            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}
