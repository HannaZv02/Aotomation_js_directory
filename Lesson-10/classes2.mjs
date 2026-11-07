
// // Створення об'єкта "прототипу"
// const animalPrototype = {
//   speak() {
//     console.log(`${this.name} says ${this.sound}`);
//   }
// };

// // Створення об'єкта, який успадковує прототип
// //==>dog==> animalPrototype ==> Object
// const dog = {
//   name: "Dog",
//   sound: "Woof",
//   speak() {
//     console.log(`Our pretty ${this.name} woofs ${this.sound}`);
// }


// };



// console.log(dog.hasOwnProperty('name')); // true, оскільки name є власною властивістю об'єкта dog
// dog.__proto__ = animalPrototype;

// // Виклик методу від успадкованого прототипу
// dog.speak(); // Dog says Woof 

// console.log(animalPrototype)
// console.log(dog)   





import { Human } from './classes1.mjs';
 class  Child extends Human {
    constructor ({name,age,gender,countryOfOrigin, schoolNamber, subjectList, parentNames}){
        super(name,age,gender,countryOfOrigin);
        this.schoolNamber = schoolNamber;
        this.subjectList = subjectList;
        this.parentNames = parentNames;
    }
  
    describeYourself() {
        console.log(`Hello! My name is ${this.name}, I'm  ${this.age} years old. I'm a ${this.gender}.
            I go to school number ${this.schoolNamber} and I study folowing subjects: ${this.subjectList.join(',')}.
              My Parrents are ${this.parentNames.join ('and')}.`);
    }
    
        
}


        // console.log (`Hello! My name is ${this.name}, I'm  ${this.age} years old. I'm a ${this.gender}.I go to  school number ${this.schoolNamber}. My Parrents are ${this.parentNames.join ('and')}.');
        //

const child1 = new Child({name: "Alice", age: 10, gender: "Female", countryOfOrigin: "USA", schoolNamber: "12345", subjectList: ["Math", "Science"], parentNames: ["John", "Jane"]});
console.log(child1)
child1.describeYourself();
