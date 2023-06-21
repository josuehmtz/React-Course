import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
describe('Pruebas en useFetchGifs', () => { 
    const category = 'Stitch';
    test('debe de regresar el estado inicial', () => { 
        const { result } = renderHook(() =>  useFetchGifs(category))
        const { images, isLoading} = result.current
        
        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })
    
    test('debe de regresar un arreglo de imagenes e isLoading es false', async() => { 
        const { result } = renderHook(() =>  useFetchGifs(category))
        
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
        )
        
        const { images, isLoading} = result.current
            
        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).not.toBeTruthy()
     })
 })