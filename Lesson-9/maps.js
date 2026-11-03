


const myMap = new Map();

const keyObject = {id: 1};

const obj = {
    [keyObject]: 'value1'
};

console.log(obj[keyObject]); // Output: 'value1'

myMap.set(keyObject, 'value1'); 
console.log(myMap.get(keyObject)); // Output: 'value1'    