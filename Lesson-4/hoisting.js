// // // var hoisting in block scope

// // if (1<3){
// //    var variable = 1
// //    let variable2 = 2
// //    const variable3 = 3
// // }
// // console.log(variable) // 1
// // console.log(variable2) // ReferenceError: variable2 is not defined  
// // console.log(variable3) // ReferenceError: variable3 is not defined

// // var hoisting in function scope
// function test ()
// {
//    var variable = 1
//    let variable2 = 2
//    const variable3 = 3
// }
//  test ();
// console.log(variable) // ReferenceError: variable is not defined
// console.log(variable2) // ReferenceError: variable2 is not defined  
// console.log(variable3) // ReferenceError: variable3 is not defined  

// Function hoisting 
// hoising for function works for function declaration but not for function expression and arrow function

// test ();

// function test() {
//     console.log("I'm a function");
// }


// this two types of function do not have hoisting


const test2 = function() {
    console.log("I'm a function expression");
}

test2 ();


const test3 = () => {
    console.log("I'm an arrow function");
}