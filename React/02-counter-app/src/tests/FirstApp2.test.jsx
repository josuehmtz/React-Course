import { getByText, render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";


//? screen es el componente renderizado

//Validate if a component contains a title

//Snapshot testing debería de ser cuando np vaya a ver muchos cambios

describe('Pruebas en FirstApp', () => {

    const title    = 'FirstApp Test';
    const subtitle = 'Subititle test';

    test('debe de hacer match con el container', () => { 
        const { container } = render(
            <FirstApp title={ title }/>
        );

        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar el mensaje First App Test', () => { 
        render(
            <FirstApp title={ title }/>
        )
        expect( screen.getByText(title)).toBeTruthy();
        //* para mostrar el componente renderizado screen.debug();
    })

    test('Debe de mostrar el título en un h1', () => {
        render(
            <FirstApp title={title}/>
        );

        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain( title );
    })

    // test('Debe de mandar el subititulo mandado por props', () => { 
    //     render(
    //         <FirstApp subtitle={subititle}/>
    //     )

    //     expect(screen.getAllByAltText( subtitle ).length).toBe( 2 );
    // })
});