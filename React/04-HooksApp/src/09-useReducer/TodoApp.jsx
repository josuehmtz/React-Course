import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "../hooks/useTodo"
import { useCounter } from "../hooks/useCounter";

export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount, handleDoneTodo, handleNewTodo, handleRemoveTodo} = useTodo();

    return (
        <>
        <h1 className="text-5xl m-3">Todo App: {todosCount}, pendientes: {pendingTodosCount}</h1>
        <hr />
        <div className="grid grid-cols-2 gap-10">
            <div className="grid-rows-7">
                <TodoList todos={todos} onRemoveTodo={handleRemoveTodo} onToggleTodo={handleDoneTodo}/>
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
