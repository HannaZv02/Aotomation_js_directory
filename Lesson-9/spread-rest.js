

// const person = {name: 'John', age: 30};
// const newPerson = { gender: 'female', name: 'Alice', ...person};

// newPerson.name = "Changed Nmae";
// console.log(newPerson)  
// console.log(person)

const parents = {
    mother: {
        name: "Jane",
        age: 55
    },
    father: {
        name: "Jack",
        age: 60
    }
}

const obj1 = {
    name: "Object 1",
    age: 10,
    parents
}



console.log( JSON.stringify(obj1));
const copyObj1 = JSON.parse(JSON.stringify(obj1));

// const copyObj1 = {...obj1};
// copyObj1.name = "Changed Object 1 Name";
// copyObj1.parents.mother.name = "Changed Mother Name"

// console.log(copyObj1);
console.log(obj1);