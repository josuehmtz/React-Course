import { getByRole, getByText, render, screen } from "@testing-library/react";
import { GifCard } from "../../components";


describe('Pruebas en GifCard Component', () => {
    
    const url = 'http://localhost/';
    const title = 'Mexico';

   test('El titulo y la url deben son obligatorios', () => { 
        const {container, getAllByText} = render( <GifCard title={title} url={url}/> )
        // expect(container).toMatchSnapshot();
        expect(screen.getAllByText(title)).toBeTruthy();
        // expect(screen.getAllByText(url)).toBeTruthy();
    }) 

    test('Debe de mostrar el url y el alt adecuados', () => { 
        const {container} = render( <GifCard title={title} url={url}/> )
        // expect( screen.getByRole('img').src).toBe(url)
        // expect( screen.getByRole('img').alt).toBe(title)
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title) 
     })

     test('debe de mostra el titulo en el componente', () => { 
        render( <GifCard url={url} title={title}/> )
        expect(screen.getByText(title)).toBeTruthy();
      })
   
    test('Debe de hacer match con el snapshot', () => { 
        const {container} = render( <GifCard title={title} url={url}/> )
        expect(container).toMatchSnapshot();
    }) 
}); 