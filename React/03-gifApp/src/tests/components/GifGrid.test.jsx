import { fireEvent, getByRole, getByText, render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => { 
    const category = 'Stitch';
    test('Debe de mostar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={category}/> )
        expect(screen.getByText('Loading...'))
        expect(screen.getByText(category))
    })
    
    test('Debe de mostrar items cuando se cargue los gifs', () => { 

        const gifs = [
            {
                id: 'abc',
                title: 'test',
                url: 'https://localhost/goku.jpg'
            },
            {
                id: '123',
                title: 'test1',
                url: 'https://localhost/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: false
        })

        render( <GifGrid category={category}/> )

        // expect(screen.getAllByRole('img').length).toBe(0)


        })
 })

 