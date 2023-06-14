import { getHeroeById } from "../../base-pruebas/08-imp-exp";

describe('Prueba en 08-imp-exp', () => { 
    test('getHeroeById debería de retornar un Heroe', () => { 
        const id = 1;
        const heroe = getHeroeById(id);
        console.log(heroe)
     })
 })