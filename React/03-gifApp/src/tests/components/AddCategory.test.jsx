import { fireEvent, getByRole, getByText, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en AddCategory', () => { 

    //Simular un evento input
    test('Debe de cambiar el valor de la caja de texto', () => { 
        render( <AddCategory onNewCategory={() => {}}/>  )
        const input = screen.getByRole('textbox')
        fireEvent.input(input, {target: {value: 'gravity falls'}})
        expect(input.value).toBe('gravity falls')
    })

    test('Debe llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue    = 'Stitch';

        //Jeest functions
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={onNewCategory}/>  )
        
        const input = screen.getByRole('textbox')
        //Form must have an aria label
        const form = screen.getByRole('form')
        fireEvent.input(input, {target: {value: inputValue}})
        fireEvent.submit(form)
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

     })

     test('No debe de llamar el onNewCategory si el input está vacío', () => { 
        const inputValue    = '';

        //Jeest functions
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={onNewCategory}/>  )
        
        //Form must have an aria label
        const form = screen.getByRole('form')
        fireEvent.submit(form)

        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
      })
 })