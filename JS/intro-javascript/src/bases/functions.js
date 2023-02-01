//* Don't declare functionsthis way
// function hello(name){
//     return `Hola, ${name}`
// }

// const hello = function(name){
//     return `Hola, ${name}`
// }

const hello = (name) => {
    return `Hola, ${name}`
}

// We can simplify this: 
// const hello = (name) => `Hola, ${name}`

const name = 'Josue Hiram Alvarez Martinez'

console.log(hello(name));

// const getUser = () => {
//     return {
//         uid: 'ABC123', 
//         userName: 'josuehmtz'
//     }
// }

//We can simplify this: 

const getUser = () => ({ uid: 'ABC123', userName: 'josuehmtz' })

console.log(getUser())

const getActiveUser = (name) =>  ({
        uid: 'ABC123', 
        userName: name 
    });

const activeUser = getActiveUser('josueHiram');
console.log(activeUser)
