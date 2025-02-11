// Predict and explain first...

// =============> write your prediction here

function multiply(a, b) {
  console.log (a * b);
//function multiply(a, b) }
// console.log(a * b); 
//}

// Return the result of the multiplication


//console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
// Output: "The result of multiplying 10 and 32 is 320"

// Secondly, the multiply function doesn't return anything, so it implicitly returns undefined and shows:
//the result of multiplying 10 and 32 is undefined 
function multiply(a,b){
   return a*b;
}

console.log('the result of multiplying 10 and 32 is ${multiply(10,32)}');

