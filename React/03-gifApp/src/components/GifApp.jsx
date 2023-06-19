import { useState } from "react";
import { AddCategory, GifGrid } from "./";

export const GifApp = () => {

  const [categories, setCategories] = useState(['Gravity Falls']);

  const onAddCategory = (category) => {

    if (categories.includes(category)) return;
    setCategories([category, ...categories]);
    // setCategories( c => [...categories, 'Gravity Falls']);
  }

  return (
    <>
        <h1 className="m-3 text-blue-900 font-bold text-5xl">GifsApp by Josue Martinez</h1>
        <AddCategory onNewCategory={onAddCategory}/>
        {
          categories.map(category => (
            <GifGrid key={category} category={category}/>
          ))
        }

    </>
  )
}
