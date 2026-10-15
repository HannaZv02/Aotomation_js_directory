


// const str= 'qqq';

// str.length;
// str.toUpperCase(); 

// const  obj =  {
//     name: 'John',
// }

// obj.name

// console.log (this);

// const person = {
//   name: 'Alice',
//   greet: function() {
//     console.log(`Hello, ${this.name}!`);
//   }
// };

// person.greet(); // Виведе "Hello, Alice!"





// function Person(name) {
//   this.name = name;
//   this.greet = function() {
//     console.log(`Hello, ${this.name}!`);
//   };
// }

// const anna = new Person('Ann');
// anna.greet(); // Виведе "Hello, Alice!"
// console.log (anna)

// const nick = new Person('Nick');
// nick.greet(); // Виведе "Hello, Alice!"
// console.log (nick)



// const obj = {
//   name: 'Alice',
//   sayHello: () => { // DON'T DO THIS!!!
//     console.log(this);
//     console.log(`Hello, ${this.name}!`);
//   },
//   greetWithWait() {
//     setTimeout(() => {
//       console.log(this);
//       console.log(`Hello, ${this.name}!`);
//     }, 1000);
//   }
// };

// obj.sayHello();
// obj.greetWithWait();


//______________________________



function greet() {
  console.log(`Hello, ${this.name}!`);
}

const person = { name: 'Alice' };
greet.call(person); // Виведе: Hello, Alice!