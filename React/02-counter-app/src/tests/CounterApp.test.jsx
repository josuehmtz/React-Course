import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../CounterApp";

//! fireEvent permite simular los clicks dentro del componente

describe('Pruebas en CounterApp', () => { 

    const value = 10;

    test('Debe de hacer match con el snapshot', () => { 
        const { container } = render(
            <CounterApp value={ value }/>
        )

        expect( container ).toMatchSnapshot();

    })

    test('Debe de mostrar el valor inicial de 100', () => {
        render(
            <CounterApp value={ value }/>
        )

        expect( screen.getByText(value).innerHTML).toContain('10');
        // expect( screen.getByText(value)).toBeTruthy();
    });


    //Simular eventos
    test('Debe de incrementar con el botón +1', () => {
        render(
            <CounterApp value={ value }/>
        )

        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy();
    });
    
    test('Debe de incrementar con el botón -1', () => {
        render(
            <CounterApp value={ value }/>
        )

        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('9')).toBeTruthy();
    });
    
    test('Debe de funcionar el botón de reset', () => {
        render(
            <CounterApp value={ value }/>
        )

        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        // fireEvent.click(screen.getByText('Reset'))
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }))
        expect(screen.getByText('10')).toBeTruthy();
    });
})