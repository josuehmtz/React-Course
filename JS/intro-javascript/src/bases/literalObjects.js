const person = {
    name: 'Josue Hiram', 
    lastName: 'Alvarez', 
    age: 22,
    address: {
        city: 'New York', 
        zip: 45200, 
        country: 'U.S.'
    }
}; 

const person2 = { ...person };
console.log(person)
// console.table([person])