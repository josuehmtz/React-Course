
export const TodoItem = ({todo}) => {
  return (
    <li className="flex justify-between">
        <span className="p-2 ">{todo.desc}</span>
        <button className="rounded-md bg-red-500 text-white p-2 m-3">Delete</button>
    </li>
  )
}
