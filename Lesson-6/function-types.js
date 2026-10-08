// // DECLARATION- к такой функции можно обращаться даже перед ее инициализацией. 
// Т.е. по коду она может быть написана ниже, но як ней могу обратится прям вс самом начале.

// console.log(add(10,5));

// function add(a, b){
//   //const sum = a + b  
//   // return sum;
//   console.log('function body called')
//     return a > 5? a + b : a - b
// }
// const res = add(2,5)

// console.log(res);

//EXPRESSION- к такой функции можно обращаться только после ее инициализацци.
// Т.е. если я ее инициализировала на строке 20, то и обращаться могу только ниже по коду


// const randomNumber = function (){
//     const num = Math.round(Math.random() *100 ) ;
//     return num;
// }
// console.log(randomNumber());



//ARROW FUNCTION


const  multiply = (a, b) => a * b
console.log (multiply(3, 4))

//такая же запись, как сверху, но чуть длиннее.
// такая запись подойж=дет, если в теле функции нужно какие то условия прописать


const  multiplyWithBody = (a, b) =>{
    const result = a + b;
    return result;
}
console.log (multiply(3, 4))