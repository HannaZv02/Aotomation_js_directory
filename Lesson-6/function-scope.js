  
// const userName = 'Anna';

// function showMessage (){
//     const myName = 'John';
//     console.log (`Hello ${userName}`);
//     console.log(`Hello ${myName}`);
// }

//     showMessage();
//     console.log(myName)  //находится вне видимости функцт


const userName = 'Anna';

let myName = 'John';
function showMessage (){
    // const myName = 'John';
    console.log (`Hello ${userName}`);
    console.log(`Hello ${myName}`);
    myName = 'Drake'
}

    showMessage();
    console.log(myName)

// комент к функции выше:
// если let и const определены за предлами функции, к ним можна обращаться после функции и перезаписывать
// если они определены в середине функции, то их за предлами функции переписать не выйдет.