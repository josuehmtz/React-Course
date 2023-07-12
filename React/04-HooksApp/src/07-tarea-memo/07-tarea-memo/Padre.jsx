import { Hijo } from './Hijo'
import { useCallback, useMemo, useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback(
        ( num ) => {
            setValor( (valor) =>  valor + num )
        }
      ,
      [],
    )

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }


    return (
        <div>
            <h1 className='text-5xl'>Padre</h1>
            <br />
            <p className='text-4xl'> Total: { valor } </p>
            <br />
            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
