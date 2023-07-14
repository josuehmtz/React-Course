import {TodoItem } from "./TodoItem"

export const TodoList = ({todos = []}) => {

    return (
        <ul className="m-3 list-inside">
            {
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo}/>
                ))
            }
        </ul>
    )
}
