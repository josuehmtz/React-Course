// import { heroes } from "./data/heroes"; 
import  heroes, { owners }  from "../data/heroes"; 



// console.log(heroes)
// console.log(owners)

export const getHeroeById = (id) => heroes.find(element => element.id === id);

// console.log(getHeroeById(2));

export const getHeroeByOwner = (owner) => heroes.filter(element => element.owner === owner);

// console.log(getHeroeByOwner('DC'));