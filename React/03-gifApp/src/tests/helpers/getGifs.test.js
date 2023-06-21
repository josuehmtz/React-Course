import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en el helper getGifs', () => {

    const search = 'gravity falls';

    test('debe de retornar un arreglo de gifs', async () => { 
        const gifs = await getGifs(search);

        //Validate an object and properties
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String) 
        })
     })
});
