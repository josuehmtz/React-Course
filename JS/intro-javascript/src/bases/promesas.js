import {getHeroeById} from './bases/importsExports'

// const promise  = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log('2 seconds after')
//         // resolve();
//         getHeroeById(3);
//         reject('No se pudo encontrar el heroe');
//     }, 2000);
// });

// promise.then( (heroe) => {
//     console.log(heroe)
// })
// .catch(err => console.warn(err));

const getHeroeById = (id) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
            // console.log('2 seconds after')
            // resolve();
            const character =  getHeroeById(id);
            (character)? resolve(character) : reject('No se pudo encontrar el heroe');
            // reject('No se pudo encontrar el heroe');
        }, 2000);
    });
}

getHeroeById(2)
    .then( console.log )
    .catch( console.warn );