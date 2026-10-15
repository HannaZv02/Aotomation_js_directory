// // function outer() {
// //     let outerVar = 20;

// //     function inner() {
// //         console.log(outerVar);
// //     }

// //     return inner;
// // }

// // let closureFn = outer();
// // closureFn(); // Виведе 10



function multiplier(factor) {
    return function(x) {
        return x * factor;
    };
}

let double = multiplier(2);
console.log(double(5)); // Виведе 10



// const simplMultiplier =  (factor, x) => x * factor
// const triple = simplMultiplier(3)
// console.log (triple(5));