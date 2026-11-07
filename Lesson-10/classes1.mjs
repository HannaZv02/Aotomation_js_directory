
export class Human { 
    // public defined beforr constructor

    countryOfOrigin = "Ukraine"; // This is a class field, not a method.
    // privat, must be defined fith # and can be used only inside the class
    #socialSecurityNumber; // This is a private class field, not a method.
    //static property   
    static teethCount = 32;

 
    constructor(name, age, gender, countryOfOrigin, socialSecurityNumber) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.countryOfOrigin = countryOfOrigin; // This is a class field, not a method.
        this.#socialSecurityNumber = socialSecurityNumber; // This is a private class field, not a method.
//  This is not a common way to define a method in a class, but it works.
// describeObject = function() {
//  console.log(  'I also work and have access to this', this.name);
//     }

    }

    static describeTeethCount() {
        console.log(`Humans have ${this.teethCount} teeth.`);
        }


    static describeTeethCount (){ 
        console.log('Humans have ${this.teethCount} teeth.');
    } 


    describeYourself() {
        console.log(`Hello! My name is ${this.name}, I'm  ${this.age} years old. I'm a ${this.gender}.`);
    }
     
    
    get socialSecurityNumber(){
        return this.#socialSecurityNumber;
     }



    set socialSecurityNumber(value){
        if (typeof value === 'string' && value.lenght ===9 ){
            this.#socialSecurityNumber = value;
        } else {
            console.error ('Invalid social Number')
        }
    }
} 

const human1 = new Human("John", 30, "Male", "USA", "123-45-6789"); 
// console.log(human1)
// console.log('describeYourself' in human1);
// human1.describeYourself();
// console.log (human1.socialSecurityNumber)
// human1.socialSecurityNumber = '1234567890';
// console.log(human1.socialSecurityNumber)

// // -------STATIC

// console.log(human1)
// console.log(human1.teethCount)
// console.log(Human.teethCount) 

