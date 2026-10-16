// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number, index, array) => {
//   console.log (number* index);
//   console.log (number *2);
// }); 

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number, index, array) => {
//  array [index] = number * index;
// }); 
// console.log (numbers)

// const numbers = [1, 2, 3, 4, 5, 6, 7,8];
// const evenNumbers = numbers.filter((elem, ind) => elem % 2 === 0 && ind > 2);
// console.log(evenNumbers)


// const numbers = [1, 2, 3, 4, 5];
// const firstEvenNumber = numbers.find((number) => number % 2 === 0);
// console.log(firstEvenNumber)

// const numbers = [1, 2, 3, 4, 5];
// const firstEvenNumberIndex = numbers.findIndex((number) => number % 2 === 0);
// console.log(firstEvenNumberIndex)

//---------------------

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((number, index) => number * index);
// console.log (doubledNumbers)

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map ((number, ind) => {
//     if(ind > 2 ) return number * 3;
//     return number * 2
// });
// console.log (doubledNumbers)


//////------
// const nestedArray = [[1, 2, ['a', 'b']], [3, 4], [5, 6]];
// const flatArray = nestedArray.flat(3); // [1, 2, 3, 4, 5, 6]
// console.log (flatArray)




// const numbers = [1, 2, 3];
//               // [[1*2, 1*3], [2*2, 2*3], [3*2, 3*3]].map()
// const doubledAndFlattened = numbers.flatMap((number) => [number * 2, number * 3]); // [2, 3, 4, 6, 6, 9]
// console.log(doubledAndFlattened)

const numbers = [1, 2, 3];
              // [[1*2, 1*3, 1*4], [2*2, 2*3, 2*4], [3*2, 3*3, 3*4]].map()
const doubledAndFlattened = numbers.flatMap((number) => [number * 2, number * 3, number*4]); // [2, 3, 4, 6, 6, 9]
console.log(doubledAndFlattened)