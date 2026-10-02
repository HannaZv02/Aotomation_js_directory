// // // console.log(Boolean(3)); // true
// // // console.log(Boolean(0)); // false
// // // console.log(Boolean("test")); // true
// // // console.log(Boolean("")); // false
// // // console.log(Boolean(null)); // false
// // // console.log(Boolean(undefined)); // false
// // // console.log(Boolean([])); // true
// // // console.log(Boolean({})); // true


// // let str = Number("test");
// // console.log(str); // NaN, помилка перетворення

// // console.log(Number("238s")); // NaN (помилка на місці символу "s")
// // console.log(Number("   32   ")); // 32 - Пробіли на початку та з кінця видаляються
// // console.log(Number(true));  // 1
// // console.log(Number(false)); // 0


// let value = true;
// // console.log(typeof value); // boolean

// // value = String(value); // тепер value - це рядок "true"
// // console.log(typeof value); // string

// // let testNumber = 5;
// // testNumber = String(testNumber);
// // console.log(typeof testNumber); // string


// console.log(!!"test"); // true
// console.log(!!null); // false
// console.log(!!0); // false
// console.log(!!''); // false 


// boolean(0) === false
// console.log(Boolean(0)); // false
// console.log(Boolean(!0)); // true
// console.log(Boolean(!!0)); // false

// const varableValue = '1';
// if (varableValue) {
//     console.log('Got into IF')
// }
// else {
//     console.log('Got into ELSE')    
// }

const variableValue = '';
const otherVar = 1;
if ( variableValue || otherVar) {
    console.log('Some undefined  code handling')
}
else {
    // other hendling code
}// do nothing, because variableValue is undefined and the condition evaluates to false
