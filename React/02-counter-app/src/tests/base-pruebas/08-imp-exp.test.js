import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import { heroes } from "../../data/heroes";

describe('Prueba en 08-imp-exp', () => { 
    test('getHeroeById debería de retornar un Heroe', () => { 
        const id = 1;
        const heroe = getHeroeById(id);
        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
     })
    test('getHeroeById debería de retornar undefined si no existe el Id', () => { 
        const id = 100;
        const heroe = getHeroeById(id);
        expect(heroe).toBeFalsy();
     })
     test('getHeroeByOwner debería de retornar un arreglo de Heroes', () => { 
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual(heroes.filter( h => h.owner === owner ))
     })
 })