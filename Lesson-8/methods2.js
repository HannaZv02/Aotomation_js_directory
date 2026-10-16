
// const numbers = [1, 2, 3, 4, 5];
// const slicedArray = numbers.slice(2,4); 
// console.log (slicedArray)


// const numbers = [1, 2, 3, ['a', 'b', 'c'], 4, 5];
// const slicedArray = numbers.slice(2,4); 
// console.log (slicedArray)
// slicedArray [1][1] = 'rally same array'
// console.log (numbers)
// console.log (slicedArray)

////--------------


// const colors = ["червоний", "зелений", "синій"];
// colors.splice(1, 1);
// console.log(colors); 

// const colors = ["червоний", "зелений", "синій", 'orange', 'yellow'];
// colors.splice(1, 3, 'жовтий' , 'помаранчевий');
// console.log(colors); 


//-------------

const array1 = [1, 2];
const array2 = [3, 4];
const concatenatedArray = array1.concat(array2);
console.log(concatenatedArray); // [1, 2, 3, 4]

const concatenatedArray2 = [...array1, ...array2]
console.log(concatenatedArray2);