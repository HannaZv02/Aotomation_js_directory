// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months); //  ["Dec", "Feb", "Jan", "March"]

// months.sort ((a,b) =>a.localeCompare((b)) );
// console.log(months);

// console.log('q'.localeCompare('w'));
// months.sort ((a,b) =>b.localeCompare((a)) );
// console.log(months);




const data = [
  { lastLoginAt: 1637299200, name: 'Alice' },
  { lastLoginAt: 1638405600, name: 'Bob' },
  { lastLoginAt: 1638387200, name: 'Charlie' }
];

// data.sort ((a,b) => {
//     if (a.lastLoginAt < b.lastLoginAt) {
//         return 100;
//     }
// if (a.lastLoginAt > b.lastLoginAt) {
//         return -100;
// }
//   return 0;
// })
// console.log(data)

// то же самое, что сверху, только короче запись
// data.sort ((a,b) => (a.lastLoginAt - b.lastLoginAt));   // соритировка по дате логина
// console.log(data)

// data.sort ((a,b) => (a.name.localeCompare(b.name))); // сортировка по именах
// console.log(data)




//----------------------------
// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse(); // [5, 4, 3, 2, 1]
// console.log(numbers)


//-======================

// const numbers = [1, 2, 3, 4, 5];
// // const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 15  
// const factirial = numbers.reduce(( accumulator, currentValue ) => accumulator * currentValue, 1);
// console.log(factirial);


// Как это работает:
// 1)  1- это начальное значение для accumulator
// 2)на первой итерации берем число 1 из массива, ставим на место  currentValue (что, сто идет после  =>).
//   в accumulator ставится наша цифра 1 из пункта 1)
//  3) получаем  accumulator * currentValue = 1*1 =1.
//  4) полученное значение 1 записываем как новое значение для accumulator
//  5) наступает вторая итерация
//  6) мы беркм втрое число из массива, ставим на место  currentValue
//  7) в accumulator ставится наша цифра 1 полученная из вычеслений в пункте 3)
//  8) получаем   accumulator * currentValue = 2*1 =2.
//  9)полученное значение 2 записываем как новое значение для accumulator
//  10)  наступает третяя итерация
//  11) мы беркм третье число из массива, ставим на место  currentValue
//  12)в accumulator ставится наша цифра 2 полученная из вычеслений в пункте 8)
//  13) получаем   accumulator * currentValue = 3*2 =6.
//  14) полученное значение 6 записываем как новое значение для accumulator
//  .........

// ----------------------------------------------------

// const numbers = [1, 2, 3, 4, 5];
// const hasThree = numbers.includes(3); // true
// console.log (hasThree)

// -------------------------------------


// const numbers = [1, 2, 3, 4, 5];
// const hasEvenNumber = numbers.some((number) => number % 2 === 0); // true
// console.log (hasEvenNumber)


const numbers = [2, 4, 6, 7, 10];
const allEvenNumbers = numbers.every((number) => number % 2 === 0); // false
console.log (allEvenNumbers)