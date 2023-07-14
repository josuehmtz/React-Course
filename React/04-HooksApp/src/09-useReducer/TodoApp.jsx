import { useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"

export const TodoApp = () => {

    const initialState = [
        {
            id: new Date().getTime(),
            desc: 'Recolectar la gema del alma',
            done: false
        },
        {
            id: new Date().getTime() * 3,
            desc: 'Recolectar la gema del poder',
            done: false
        },
    ]

    const [todos, dispatch] = useReducer(todoReducer, initialState)

    const handleNewTodo = (todo) => {
        // dispatch([...todos, todo])
        console.log(todo)
    }

    return (
        <>
        <h1 className="text-5xl m-3">Todo App: 10, pendientes: 2</h1>
        <hr />
        <div className="grid grid-cols-2 gap-10">
            <div className="grid-rows-7">
                <TodoList todos={todos}/>
            </div>
            <div className="grid-rows-5">
                <h4 className="text-3xl ml-3 mt-5 mb-3">Add ToDo</h4>
                <hr />
                <TodoAdd onNewTodo={handleNewTodo}/>
            </div>
        </div>
        
    </>
  )
}
