import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        //Utilizar to equal para comparar objetos
        expect(testUser).toEqual(user);
    })

    test('getUsuarioActivo debe de retornar un objeto', () => {
        const name = 'Josue';

        const user = getUsuarioActivo(name);
        
        //Compare objects properties

        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
    });
}); 