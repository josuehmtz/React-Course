const person = {
    name: 'Josue', 
    age: 22, 
    key: 'Developer'
};

// const { name:name2 } = person;

// console.log(name2);

const context = ( {name, age, key, range = 'captain'} ) => {
    return {
        keyName: key, 
        anios: age, 
        latlng: {
            lat: 13.322,
            lng: -311.24
        }
    }
};

const {keyName, anios, latlng:{lat, lng}} = context(person);

console.log(keyName, anios)
console.log(lat, lng)