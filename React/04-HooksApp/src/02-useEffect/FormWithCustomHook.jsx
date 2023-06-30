import { useEffect } from "react"
import { useState } from "react"
import { useForm } from "../hooks/useForm"
import { Message } from "./Message"

export const FormWithCustomHook = () => {

    const {username, email, password, formState, onInputChange} = useForm({
        username: 'coteHiram',
        email: 'jhiram.alvz@gmail.com',
        password: ''
    });

    // const {username, email, password} = formState;
    
    //Declared with an empty array, is called only the first time
    useEffect(() => {
        // console.log('useEffect called')
    }, [])
    
    useEffect(() => {
    }, [formState])

    useEffect(() => {
    }, [email])    

    return (
        <>
            <h1 className="text-4xl mb-4">Form With Custom Hook</h1>
            <hr />
            <input type="text" placeholder="username" name="username" value={username} onChange={onInputChange} className="mt-4"/>
            <input type="email" placeholder="jhiram.alvz@gmail.com" name="email" value={email} onChange={onInputChange} className="m-4"/>
            <input type="password" placeholder="password" name="password" value={password} onChange={onInputChange} className="m-4"/>
            {
                (username == 'cotefito') && <Message />
            }
        </>
    )
}