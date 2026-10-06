// for (let i = 0; i < 3; i++) {
//   console.log(i)
// }

import { randomNumber } from "./export.mjs";

/*
Покроковий опис роботи циклу for, що наведено вище

* 1. Ініціалізація змінної i (let i = 0)
* 2. Перевірка умови i < 3 (0 < 3) - умова правдива, переходимо до виконання тіла циклу
* 3. Виконання тіла циклу  console.log(i)  // 0
* 4. Виконання постітераційної інструкції i++ (те саме що i = i + 1)
* 5. Перевірка умови  (1 < 3) - умова правдива, переходимо до виконання тіла циклу
* 6. Виконання тіла циклу  console.log(i) // 1
* 7. Виконання постітераційної інструкції i++
* 8. Перевірка умови  (2 < 3) - умова правдива, переходимо до виконання тіла циклу
* 9. Виконання тіла циклу  console.log(i) // 2
* 10. Виконання постітераційної інструкції i++
* 11. Перевірка умови  (3 < 3) - умова ХИБНА, наступна ітерація не відбувається
* 12. Цикл завершив своє виконання
* */

// for (let i = 1; i < 10; i *= 2) {
//   console.log(i)
// }

// const str = 'This is very long phrase';
// for (let  i = 0; i < str.length; i++ ) {
//     console.log(str[i]);
// }



// for (let i = 0; i <= 10; i++) {
// //  if (i % 2 === 0) {
// //     console.log(i)
// //  }
//     if (!(i % 2)){
//       console.log(i)
//     }

// }

// for (let i = 0; i <= 10; i++) {
//     if (i === 2 || i === 5){
//          continue; // gпропускает текущую операцию и переходит к другой
//     } else if (i === 7){
//         break;// выходит из цикла полностью
//     }
//     console.log(i);
// }


// let count =  0;
// while (count < 3){
//     console.log(count); //выведет числа 0, 1, 2
//     count++;
// }

// let count =  0;
// const randomNum = randomNumber()
// console.log (randomNum);
// const randomBool = randomNum  > 50; // случайное логическое число
// while (count < 3 && randomBool){
//     console.log(count); //выведет числа 0, 1, 2
//     count++;
// }

//-----WHILE

// let count = 0; //1) На первой этерации мы задаём начало. Говорим, что count = 0
// let randomNum = randomNumber() //  2) дальше я беру какое-то начальное значение моего randomNumber
// console.log ('randomNam>>', randomNum);
// let isElementVisible = randomNum > 95;  // 3) делвю первоочередное сравнение моего значения - true или афдіу
// while (count < 10 && !isElementVisible){// 4) дальше захложу в while 
//     //pseudo sleep = (2000)
//     console.log ('count>>', count);
//     randomNum = randomNumber ()
//     isElementVisible = randomNum > 95;
//     console.log ('randomNum', randomNum)
//     count++;
// }

// do-while


// let  num = 1; 
// do {
//     console.log (num);
//     num++;
// } while (num <= 5);

// multi-layer cycles

// const arr = [['value1', 'value2'], ['value3', 'value4'], ['value5', 'value6']];

// for (let i = 1; i <= 9; i++) {
// 	for (let j = 1; j <= 3; j++) {
// 		console.log(' '. repeat(i), i, j);
// 	}
// }


// let output = '';
// for (let i = 1; i <= 9; i++) {
// 	for (let j = 1; j <= 9; j++) {
// 		output += ' ' + i * j;
// 		if (i * j < 10) {
// 			output += ' ';
// 		}
// 	}
//     console.log (output)
// 	output = '';
// }