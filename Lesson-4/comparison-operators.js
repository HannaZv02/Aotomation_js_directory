// // // console.log(3 > 1);  // true
// // // console.log(2 != 1); // true
// // // console.log(3 == 1); // false

// // console.log( '2' > 1 ); // true, рядок '2' стає числом 2
// // c

// // const a = 'a;
// // console.log(a.charCodeAt(0)); // 97, код символу 'a' в таблиці Unicode 
// // onsole.log( 'a' <'b ' ); // false, порівняння рядків відбувається за алфавітом

// //-----------------
// console.log('' == false); // true
// console.log('01' == 1); // true, рядок '01' стає числом 1

// // Логічне значення true стає 1, а false — 0.

// console.log(true == 1); // true  1 === 1
// console.log(false == 0); // true 0 === 0

// // ---strict comparison (===) - порівняння з урахуванням типу даних
// console.log('\n');
// console.log(0 === false); // false
// console.log('' === false); // false
// console.log('1' === 1); // false с початку було перевіренно тип string === number  на цьому етапі поріняння зупилось та результат поврнувся false 

console.log(null > 0);  // false, 0 > 0
console.log(null >= 0); // true, 0 == 0
console.log(null == 0); // false, null == 0

console.log(undefined > 0); // false, NaN > 0
console.log(undefined < 0); // false, NaN < 0
console.log(undefined == 0);// false NaN == 0