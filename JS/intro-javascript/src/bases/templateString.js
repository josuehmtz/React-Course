const name = 'Josue Hiram'; 
const lastName = 'Alvarez';

// const fullName = name + ' ' + lastName;
const fullName = `${name} ${lastName}`;

console.log(fullName);

function getGreeting(name){
    return 'Hello ' + name;
}

console.log(`This is a test: ${getGreeting(fullName)}`)