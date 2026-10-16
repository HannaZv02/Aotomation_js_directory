

// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = originalArray.slice();
// console.log (originalArray)
// console.log (copiedArray)

// copiedArray.push(6)
// console.log (originalArray)
// console.log (copiedArray)


const nonPrimitiveArray  = [1, 2,['q ', 'w', 'e', [1, 2, 3]], 3, 4, 5];
const copiedNonPrimitiveArray = [...nonPrimitiveArray];
const deepCopiArray = structuredClone(nonPrimitiveArray);
const deepCopiArray2 = JSON.parse(JSON.stringify(nonPrimitiveArray))
copiedNonPrimitiveArray [2][1] = 'some array';
copiedNonPrimitiveArray [1] = 'some number';

console.log ( 'nonPrimitiveArray', nonPrimitiveArray)
console.log('\n')
console.log ('copiedNonPrimitiveArray', copiedNonPrimitiveArray)
console.log('\n')
console.log ('deepCopiArray', deepCopiArray)
console.log('\n')
console.log ('deepCopiArray2', deepCopiArray2)

