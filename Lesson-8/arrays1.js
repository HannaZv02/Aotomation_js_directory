

// console.log (typeof [])

// ['a', 'b', 'c']


// const ojbAsArray = {
//     0: 'a',
//     1: 'b',
//     2: 'c',
// }


// const colors = ['red', 'green', 'blue'];
// console.log(colors[0]); // Виведе "red"
// console.log(colors[1]); // Виведе "green"
// console.log(colors[2]); // Виведе "blue"

// colors[1] = 'yellow'
// console.log (colors)
// console.log(colors[colors.length -1])

const students = [
  ['Alice', 25, ['ccc', 'bbb', 'xxx']],
  ['Bob', 22, 'Math'],
  ['Carol', 28, 'Physics'],
];

console.log(students[0][2][0]) ; // 'Alice'
console.log(students[1][2]); // 'Math'
console.log(students[2][1]); // 28