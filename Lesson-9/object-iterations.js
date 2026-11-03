

// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };

// for (let key in person) {
//   console.log(key + ': ' + person[key]);
// }

// const keys = Object.keys(person);
//  for (const key of keys){
//     console.log (key + ':' + person[key]);
//  }
// console.log (keys);




// const values = Object.values(person);
//  for (const value of values){
//     console.log (value);
//  }
// console.log (values);



// const entries = Object.entries(person);
// console.log(entries);


// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Duke";
// dog.breed = "Labrador"

// console.log(dog);// {name: 'Duke'}
// console.log(dog.name);// 'Duke'
// console.log(dog.legs);// 4
// console.log(dog.breed);



const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Mike", age: 40 }
];
people.push ({name: "Anna", age: 28});

console.log(people)
// console.log(people[0].name); // { name: "John", age: 30 }
// console.log(people[1].age); 
// console.log(people[2].name);

const mappedArrayNmaes = people.map (person => person.name)
console.log(mappedArrayNmaes)

const mappedMutatedArrayNmaes = people.map (person =>({
    name: "Dear $(person.name)",
    age: person.age + 1

}))  
console.log(mappedMutatedArrayNmaes);


const thirtyYearsOlder = people.filter (person => person.age >= 30);
console.log (thirtyYearsOlder);