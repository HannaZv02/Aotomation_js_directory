// // // // || logical OR operator

// // // // console.log(true || true); // true 1+1 =1
// // // // console.log(false || true); // true 0 + 1 = 1 
// // // // console.log(true || false); // true 1 + 0 = 1
// // // // console.log(false || false); // false 0 + 0 = 0



// // // // console.log(1 || 0); // 1 (1 є першим правдивим значенням)
// // // // console.log(null || 1); // 1 (1 є першим правдивим значенням)
// // // // // console.log(null || 0 || 1); // 1 (перше правдиве значення)

// // // // console.log(undefined || null || '' || 0 || 1); // 1 (перше правдиве значення)
// // // // console.log(undefined || null || 0); // 0 (усі хибні, повертається останнє значення)

// // // // && logical AND operator

// // // console.log(true && true); // true 1 * 1 = 1
// // // console.log(false && true); // false 0 * 1 = 0
// // // console.log(true && false); // false 1 * 0 = 0
// // // console.log(false && false); // false 0 * 0 = 0


// // // console.log(1 && 2); // 2
// // // console.log(null && 42); // null
// // // console.log(0 && "test"); // 0
// // // console.log(1 && 2 && null && 3); // null
// // // console.log(1 && 2 && 3); // 3, останнє

// // // const variableValue = ''  // або будь-яке інше значення, яке може бути хибним
// // // const result = variableValue || 'default value';
// // // const resultOptional = variableValue ?? 'default value'; // nullish coalescing operator

// // // console.log(result); // 'default value'
// // // console.log(resultOptional); // 'default value'

// // console.log(!true); // false
// // console.log(!0); // true
// // console.log(!''); // true

// // ternary operator
// // const age = 20;
// // const isAdult = age >= 18 ? true : false;   

// const a = 5;
// const result = a > 3 ? 'Greater than 3' : 'Less than or equal to 3';
//  console.log(result);


//  console.log( true && false || true && true ); // true  // логичное И имеет приоритет над логическим ИЛИ, поэтому выражение вычисляется как (true && false) || (true && true), что равно false || true, а это равно true.