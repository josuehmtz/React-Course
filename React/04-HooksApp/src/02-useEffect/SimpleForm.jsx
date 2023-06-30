import { useEffect } from "react"
import { useState } from "react"
import { Message } from "./Message"


export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        username: 'coteHiram',
        email: 'jhiram.alvz@gmail.com'
    })

    const {username, email} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }
    
    //Declared with an empty array, is called only the first time
    useEffect(() => {
        console.log('useEffect called')
    }, [])
    
    useEffect(() => {
    }, [formState])

    useEffect(() => {
    }, [email])    

    return (
        <>
            <h1 className="text-4xl mb-4">Simple Form</h1>
            <hr />
            <input type="text" placeholder="username" name="username" value={username} onChange={onInputChange} className="mt-4"/>
            <input type="email" placeholder="jhiram.alvz@gmail.com" name="email" value={email} onChange={onInputChange} className="m-4"/>
            {
                (username == 'cotefito') && <Message />
            }
        </>
    )
}