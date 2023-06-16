import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => { 
    test('getHeroeByIdAsync debe de retornar un promesa', (done) => { 
        const id = 1;
        getHeroeByIdAsync(id).then(
            heroe => {
                expect(heroe).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })
                //Funcion para trabajar con promesas, se dede de mandar la función done
                done();
            })
            .catch( done );
     })
    // test('getHeroeByIdAsync debe de retornar un error si el heroe no existe', (done) => { 
    //     const id = 1;
    //     getHeroeByIdAsync(id)
    //         .catch( error => {
    //             console.log(error)
    //             done();
    //         });
    //  })
 })