import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("")

    const onChangeHandler = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const cleanValue = inputValue.trim();
        if (cleanValue.length <= 1) return;
        onNewCategory(cleanValue);
        // setCategories( categories => [inputValue, ...categories]);
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Search GIFs..."
                value={inputValue}
                className="m-3 p-3 bg-white shadow-md h-10 w-50 border-2 border-blue-900 rounded-xl inline-flex" 
                onChange={ onChangeHandler }
            />
            <button type="submit" className="p-1 m-3 shadow-md h-10 w-16 bg-orange-300 font-semibold rounded-xl">Add</button>
        </form>
    )
}
