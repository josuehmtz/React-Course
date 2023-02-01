// const array = new Array(); You can declare an array this way
const array = [1,2,3,4]; 

//* Important: Don't use push for the arrays
// array.push(1);
// array.push(2);
// array.push(3);
// array.push(4);
let array2 = [...array, 5];

const array3 = array2.map(function(value){
    return value * 2;
});
console.log(array)
console.log(array2)
console.log(array3)