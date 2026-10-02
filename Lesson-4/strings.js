// // // const arr = ['val1', 'val2', 'val3'];

// // // console.log(arr [0])// Индекс в массиве. 0 соответствует первому элементу массива
// // // console.log(arr.length) // Длина массива. 3
// // // arr[1] = 'new value' // Изменение значения элемента массива по индексу-Мутабельность массива
// // // console.log(arr) // ['val1', 'new value', 'val3']

// // // const text = 'This is a sample text.';

// // // console.log(text [0]);// Индекс в строке. 0 соответствует первой букве строки
// // // console.log(text.length) // Длина строки. 25
// // // console.log(text[text.length - 1]) // Последний символ строки. 25 - 1 = 24, text[24] = '.'



// // // concatenation of strings

// // //old way - using the + operator
// // const str1 = 'Hello';
// // const str2 = 'World';  
// // const str3 = str1 + ' ' + str2; // Concatenation using the + operator
// // console.log(str3); // Output: Hello World
 
// // // New way - template literals (template strings)
// //  const name = 'John';
// //  //const greeting = `Hello, ${name}!`; // Using template literals with placeholders
// //  const greeting = `Hello, ${name}! Your age should be ${Math.floor(Math.random() * 100).toFixed(0)} years old`; // Using template literals with placeholders
// //   console.log(greeting); // Output: Hello, John!

// //methofs of strings

// const text = "JavaScript";
// console.log(text.length); // Виведе: 10
// console.log(text.toUpperCase()); // Виведе: "JAVASCRIPT"
// console.log(text.charAt(3)); // Виведе: "a"
// console.log(text.indexOf("Script")); // Виведе: 4
// console.log(text.substring(4, 10)); // Виведе: "Script"
// console.log(text.endsWith("Script")); // Виведе: true
// console.log(text.slice(4, 7)); // Виведе: "Scr"
// console.log(text.replace("Java", "Type")); // Виведе: "TypeScript"
// console.log(text.replaceAll("a", "A")); // Виведе: "JAvAScript"
// console.log(text.includes("Script")); // Виведе: true

// const str1 = 'I love QA. QA is my passion. QA is the best!';
// console.log(str1.replace('QA', 'Quality Assurance')); // Виведе: "I love Quality Assurance. QA  is my passion. QA is the best!"
// console.log(str1.replaceAll('QA', 'Quality Assurance'));  
//  console.log(str1.replace(/qa/gi, 'Quality Assurance')); //выведет замененный текст, где 'QA' заменено на 'Quality Assurance' во всех вхождениях, независимо от регистра (глобально и без учета регистра).
