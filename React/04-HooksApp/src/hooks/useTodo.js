import { useEffect, useReducer } from "react";
import { todoReducer } from "../09-useReducer/todoReducer";
import { useCounter } from "./useCounter";

const init = () => { 
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const initialState = [];

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action)
    }

    const handleRemoveTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }

        dispatch(action)
    }

    const handleDoneTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }

        dispatch(action)
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done).length,
        handleDoneTodo, 
        handleNewTodo,
        handleRemoveTodo
    }
}
