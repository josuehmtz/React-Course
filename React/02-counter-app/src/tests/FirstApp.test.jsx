import { getByText, render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

//Validate if a component contains a title

//Snapshot testing debería de ser cuando np vaya a ver muchos cambios

describe('Pruebas en FirstApp', () => {
    // test('Debe de hacer match con el snapshot', () => { 
    //     const title = 'First App testing'
    //     const {container} = render(<FirstApp title={title}/>);
    //     expect(container).toMatchSnapshot();
    // });
    
    test('Debe de mostrar el titulo en un h1', () => { 
        const title = 'First App testing'
        const {container, getByText, getByTestId} = render(<FirstApp title={title}/>);
        expect(getByText(title)).toBeTruthy();

        // expect(getByTestId('testTitle')).toBeTruthy();
        expect(getByTestId('testTitle').innerHTML).toBe(title);
        expect(getByTestId('testTitle').innerHTML).toContain(title);

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toBe(title);
        // expect(h1.innerHTML).toContain(title);
        
    });

    // test('Debe de eniar el subtitulo enviado por props', () => { 
    //     const subtitle = 'subtitle';
    //     const {getAllByText} = render(
    //         <FirstApp />
    //     );

    //     //Number of elements contained
    //     expect(getAllByText(subtitle)).toBe(2);
    // })
});