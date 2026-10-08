// // // // // const registerName = (name, lastName) =>{
// // // // //     return lastName ? `${name} ${lastName}`: name;
// // // // // } 

// // // // // // console.log(registerName ('John'))
// // // // // // console.log(registerName ('John', 'Done'))
// // // // // console.log(registerName())
 
// // // // //   как прочитать функцию сверху:
// // // // // 1) lastName - тернарный оператор. Мы ожидаем, что это будет строка
// // // // // 2) если строка вернулась не пустой, значит она становится true
// // // // // 3) если сторка будет True,то в резльтате мы получи то, 
// // // // //     что стоит первое после знака вопроса ? `${name} ${lastName}`
// // // // // 4) если  lastName будет пустой строкой или undefined()ее вообще не передали, 
// // // // //     то она будет false
// // // // // 5) если будет false, то в результате мы вернем то, что после двоеточия


// // // // // const registerName = (name, lastName) =>{
// // // // //     if(typeof name !== 'string'){
// // // // //         throw new Error ('Name must be a string, mandatory');
// // // // //     }
// // // // //     return lastName ? `${name} ${lastName}`: name;
// // // // // } 
// // // // // console.log(registerName ('John'))
// // // // //  console.log(registerName (2, 'Done'))

// // // // //DEFAULT ARGUMENT

// // // // const registerName = (name, lastName = 'Smith') =>{
// // // //     if(typeof name !== 'string'){
// // // //         throw new Error ('Name must be a string, mandatory');
// // // //     }
// // // //     return lastName ? `${name} ${lastName}`: name;
// // // // } 
// // // // console.log(registerName ('John'))

// // // // // как читать функцию выше:
// // // // // 1) мы задал значение для lastName = 'Smith'
// // // // //2) если я, во время вызова моей функции  registerName не  передам значение для  lastName,
// // // // // то, в результете подставится дефолтное заданное значеное  'Smith'



// // // const returnAge = (age, shouldLog = false) => {
// // //     if (shouldLog) {
// // //         console.log(`Age is: ${age}`);
// // //     }
// // //     return age;
// // // }

// // // console.log(returnAge(30, true))
// // // console.log (returnAge(25))


// // // REST OPERATOR (argument) ...
// // //- все аргументы, переданные в функцию, будут собраны в массив

// // const restOperatorFunc = function (...restArgs){
// //     console.log( 'restArgs:', restArgs);
    
// // }

// // const arr = ['val1', 'val2' , 'val3', 'val4'] ;

// // restOperatorFunc (...arr)
// // restOperatorFunc ('val1', 'val2' , 'val3', 'val4')
// // restOperatorFunc (1, 'hello', true, {name: 'John'}, [1, 2,3] );

 

// // const arr1 = ["a", "b", "c"];
// // console.log (...arr1);
// // console.log ('a', 'b', 'c');


// const sumCounter = (a, b, ...rest) =>{
//     const sum = a +b ;
//     console.log ('rest:', rest)
//     return sum
// }
// console.log (sumCounter (1,2));
// console.log (sumCounter (1,2, 3,4,5,6,7,8));

// // как читать функцию выше:
// // 1) первые переданное число будет записано в _а_
// // 2) второе переданное значени будет записано в  _b_
// // 3) все остальные переданные значения буду записаны в массив rest 


// Default arguments in functiona

function sum() {
	let total = 0;

 console.log('arguments :', arguments);
	for (let i = 0; i < arguments.length; i++) {
		total += arguments[i];
	}

	return total;
}

console.log(sum(2, 4, 6)); // виведе 12