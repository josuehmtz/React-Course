// Not like destructuring objects, use positions
const characters = [
    'Goku', 'Vegeta', 'Trunks'
];

const [ , c2 ] = characters; 

console.log(c2)

const returnArray = () => {
    return [
        'ABC', '123'
    ]
}; 

const [letters, numbers] = returnArray();

console.log(letters, numbers); 

const state = (value) => {
    return [
        value, () => {
            console.log('Hola Mundo')
        }
    ]
}

const [name,  setName] = state('Josue');

console.log(name)
setName();