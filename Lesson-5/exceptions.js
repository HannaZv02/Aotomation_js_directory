const value = -1
try {
  if (value > 0) {
    throw 'simple text';
  } else {
    throw new Error('Error text');
  }
} catch (error) {
  console.error ('Caught an error:', error.stack);
  throw Error ('Still some error happened ')
} 
console.log ('did not get here if throw is unhandled ') 