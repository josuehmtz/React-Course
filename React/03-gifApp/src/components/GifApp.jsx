import { useState } from "react";
import { AddCategory  } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifApp = () => {

  const [categories, setCategories] = useState(['Venom']);

  const onAddCategory = (category) => {

    if (categories.includes(category)) return;
    setCategories([category, ...categories]);
    // setCategories( c => [...categories, 'Gravity Falls']);
  }

  return (
    <>
        <h1 className="text-blue-900 m-3 font-bold">GifsApp</h1>
        <div className="inline-flex">
          <AddCategory onNewCategory={onAddCategory}/>
        </div>
        {
          categories.map(category => (
            <GifGrid key={category} category={category}/>
          ))
        }

    </>
  )
}
