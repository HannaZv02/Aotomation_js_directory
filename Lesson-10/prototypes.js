

// const num = 1;
// console.log(typeof num.toString());
// Number.prototype.toString = function(){
//     return 'Overriden toString method';
// }


//     console.log(num.toString());


const user = {
	login() {
	  return true;
  }
}

const person = {
  name: 'John',
  age: 42,
  __proto__: user
};

for (const item in person) {
  if (person.hasOwnProperty(item)) {
    console.log('this is a property of the person - ', `${item} : `, person[item]);
  } else {
    console.log('this is the prototype property - ', `${item} :`, person[item]);
  }
}