//First time creating testing files with Jest

describe('Pruebas en <DemoComponent/>', () => { 
    test('Esta prueba no debe de fallar', () => {
        //1. Inicialización
        const message1 = 'Hello World';
        
        //2. Estímulo
        const message2 = message1.trim();
        
        //3. Observar el comportamiento
        expect(message1).toBe(message2)
        
        
    })
 })
