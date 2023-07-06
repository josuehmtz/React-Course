import { memo } from "react";

export const Hijo = memo( ({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="rounded-md bg-indigo-500 text-white m-3 p-2"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
