import { useForm } from "../hooks/useForm"

export const TodoAdd = ({onNewTodo}) => {

    const {desc, onInputChange, onResetForm} = useForm({
        desc: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();

        if(desc.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            desc,
            done: false
        }

        onNewTodo(newTodo)
        onResetForm()

    }

  return (
    <form onSubmit={onFormSubmit} className="p-2">
        <input type="text" placeholder="What do we have to do?" value={desc} onChange={onInputChange} name="desc" className="rounded-md  p-3 border-solid border-2"/>
        <button type="submit" className="m-4 p-3 rounded-md border-2 border-blue-500 text-blue-500">Add</button>
    </form>
  )
}
