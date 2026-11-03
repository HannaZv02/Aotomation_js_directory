


//  const person = {
//   name: {
//     first: "John",
//     last: "Doe",
//     "@#$%": 123,
//     'full name' : function() {
//         return this.first + ' ' + this.last;
//     }
//   },
//   age: 30
// };

// console.log(person.name.first);
// console.log(person['age'])
// console.log(person.name['@#$%'])
// console.log(person['name']['full name']())

//  -----замена перемеенной ege в объекте---

// console.log(person.age);
// person.age = 31;
// console.log(person.age); // 31

//  -----добавление нового поля в объект---


// console.log(person.country); // undefined
// person.country = "USA";
// person.name.whatever =  "whatever"
// delete person.name["full name"]
// console.log(person.country); // "USA"
// console.log(person)

//  -----удаление поля из объекта---
//delete person.age
// console.log(person)




//---------------------------------------------------



const age = 25;
const name = "John"
const randomNumber = Math.round(Math.random()*10000) ;

const person = {
    name, //<<<<<<<<-------name: name
    age,  //<<<<<<<<-------age: age
    [randomNumber]: "Random Value", // динамическое свойство
    somePersonGreeting: function (someArg){
      return 'Hello, may name is ${this.name} and I am ${this.age} years old , and this is someArg : ${someArg}';
    }
  };
console.log(person.age); // 25
console.log(person.name); // Joh
console.log(person[randomNumber])
console.log(person)
console.log (person.somePersonGreeting("This is some argument"))