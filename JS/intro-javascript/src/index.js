import {getHeroeById} from './bases/importsExports'

const promise  = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log('2 seconds after')
        // resolve();
        getHeroeById(3);
    }, 2000);
});

promise.then( (heroe) => {
    console.log(heroe)
} );
