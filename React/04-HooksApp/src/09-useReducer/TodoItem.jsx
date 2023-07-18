
export const TodoItem = ({todo, onRemoveTodo, onToggleTodo}) => {
  return (
    <li className="flex justify-between">
        <span onClick={() => onToggleTodo(todo.id)} className={`text-2xl p-2 ${(todo.done)? "line-through" : ""}`}>{todo.desc}</span>
        <button className="rounded-md bg-red-500 text-white p-2 m-3" onClick={() => onRemoveTodo(todo.id)}>Delete</button>
    </li>
  )
}
