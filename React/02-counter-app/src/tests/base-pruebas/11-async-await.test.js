import { getImagen } from "../../base-pruebas/11-async-await"


describe('Pruebas en 11-asyn-await', () => { 
    test('getImage debe de retornar el URL de la imagen', async() => { 
        const url = await getImagen();
        expect(typeof url).toBe('string');
     })
 })