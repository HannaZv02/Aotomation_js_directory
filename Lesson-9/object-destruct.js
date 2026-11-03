
// const person = {
//   name: "John",
//   age: 30,
//   gender: "male",
//       parents: {
//         mother: {
//             name: "Jane",
//             age: "55"
//         },
//         father: {
//             name: "Jack",
//             age: "60"       
//         }
// }};

// const name = "Marry";
// const { name : personNmae, age, gender = "unknown", parents: {mother:{name: motherName}}} = person;

// console.log(name); // "John"
// console.log(age); // 30
// console.log(gender); // "male" 
// console.log(motherName)




const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 }
];

for (const { name, age } of people) {
  console.log(`${name} is ${age} years old`);
}

const mappedArray = people.map(({name,age})=> '${name} is ${age} years old');
console.log (mappedArray)


const funcDestruct = ({name, age})  => {
    console.log ('Name: ${name}, Age: ${age}');
}
funcDestruct (people[0] )