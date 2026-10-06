import   {randomNumber}  from "./export.mjs"


// const variableValue = randomNumber ()
// const stringValue = ''
// console.log (variableValue)
// if (variableValue % 2 || variableValue > 50 && !stringValue  ) {// Если значение больше 50 И переменная stringValue будет false ИЛИ это значение,  variableValue, когда поделится на 2( % 2) и будет остаток, значт это будет не 0
//                                                                 //  логическое И(&&) всгда выполняется перед логическим ИЛИ (||))
//     console.log("I'm here");
// } else {
//     console.log("BROKEN")
// }

// const variableValue = randomNumber ()
// console.log (variableValue)
// if (variableValue > 80 ) {
//     console.log("I'm really old");
// } else if 
//     (variableValue > 50 ){
//     console.log( "I'm still yong")
// } else if 
//         (variableValue > 20 ) {
//            console.log( "I'm a child")  
// } else {
//     console.log ("I'm a baby")
// }
        

// неудобная запись
let x = 10;
let y = 5;
let z = 15;

// if (x > 5) {
//   console.log("x більше за 5");
//      if (y > 4) {
//         console.log("y больше 4");
//           if (z > 10){
//             console.log("z больше 10");
//           } else {
//               console.log ("z меньше или равно 10");
//           }
//      } else if (y <=4 && y>2){
//         console.log ("y больше 2, но меньше или равно 4");
//      }else {
//         console.log ("y меньше или равно 2");
//      } 

//      } else {
//         console.log ("x меньше или равно 5");
//      } 

 //  запист переписанная на одноуровневые IFы, 
if (x > 5 && y > 4 && z > 10 ) {
    console.log ("x больше 5, y больше 4, z больше 10");
}else if (x >5 && y > 4  && z <= 10){
    console.log("x больше 5, y большу 4, z меньше или равно 10");
    }else if (x > 5 && y <= 4 && y > 2) { 
    console.log ("x больше 5, y больше 2 но еньше или равно 4");
} else if (x > 5 && y <=2){
    console.loge("x больше 5, y меньше или равно 2");
}else  {
     console.log ("x меньше или равно 5");
}