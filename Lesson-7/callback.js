// // // // const isOdd = (n) => { // туту функция задаётся как константа
// // // //   return n % 2 !== 0;  // верНёт true или false: true если не делится нацело на 2,  и false если  делится нацело на 2
// // // // }

// // // // let printMsg = (callback, num) => { //1)  значит, что на позицию 1 в аргументе, который будет передан в функцию printMs прийдет какаятто функция (сallback) . Значение задеётся на строке 11
// // // //   const isNumOdd = callback(num); //2) дальше мы эту функцию сallback как-то выполним. В данном случае мы знаем, что этв функция должна принять в себя num (намбер). Этот num описан выше в const isOdd.
// // // //                                     // В этом случае мы функцию, которая к нам пришла, вызываем в теле обворачивающей функции
// // // //   console.log(`The number ${num} is an odd number: ${isNumOdd}.`)
// // // // }
// // // // // Pass in isEven as the callback function
// // // // printMsg(isOdd, 4); 
// // // // // Prints: The number 4 is an even number: True.




// // // // второй пример
// // // // сb ===callbac, только короче


// // // // const isOdd = (n) => {
// // // //   return n % 2 !== 0;
// // // // }

// // // // const  printMsg = (cb, num) => { //
// // // //     let isNumOdd;
// // // //     if (cb.name === 'isOdd'){
// // // //         isNumOdd = cb (num);
// // // //     } else if (cb.name === 'isEven'){
// // // //         isNumOdd = !cb(num);
// // // //     }
 
// // // //   console.log(`The number ${num} is an odd number: ${isNumOdd}.`)
// // // // }

// // // // // Pass in isEven as the callback function
// // // // printMsg(isOdd, 4); 
// // // // // Prints: The number 4 is an even number: True.



// // // // //----------------------------------------------?
// // // function fetchData(url, callbackArg) {// 1) у нас есть функция fetchDat. В ней есть аргумет функции-url. 
// // //                                    //Мы его принемаем и передаём на строку 47  в fetch(url). callback - это функция, котрую я передам в 
// // //                                    // сторку 56 в  const callbackFn = function(data) {console.log(data);}
 
// // //   fetch(url) // 2) тут происходит api запрос
// // //     .then((res) => {// когда запос проихошел, мы его обрабатавыем с посмощью .then
// // //                       // .then-это специальный синтакисис, который нужн для обрабатывания промисифайд функций  
// // //         return (res.json()) 

// // //     })
// // //         .then (callbackArg ) // .then(data =>console.log(data)
// // //     // .catch((error) => console.log(error));
// // // }
// // // const callbackFn =  (data) => {
// // //   console.log(data);
// // // }

// // // fetchData ('https://jsonplaceholder.typicode.com/todos/1', callbackFn);


// // //Array methods


// // const numbers = [1, 2, 3, 4, 5, 6, 7 , 8, 9, 10];


// // // const evenNumbers = numbers.filter(num => num % 2 === 0);
// //  const evenNumbers = numbers.filter ((num, ind, arr) => {
// //   if (ind > 3) return false;
// //   return num % 2 === 0;
// //  })

// //  console.log (evenNumbers);

// // // (num, ind, arr) => {        // Это все callback из примера віше
// // //   if (ind > 3) return false;
// // //   return num % 2 === 0;
// // //  }







// //  IIFE and Anonimus functions

// // const add = function(x, y) {
// //     return x + y;
// // };

// // console.log (add.name)

// (function(arg1) {
//     const message = "Це локальна змінна";
//     console.log(message, arg1);
// })();