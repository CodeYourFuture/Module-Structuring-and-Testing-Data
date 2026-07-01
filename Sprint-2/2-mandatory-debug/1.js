// Predict and explain first...
//  =============> write your prediction here
//Js doesnt understand this code so it will read as an error because the return varable has not been aissinged any variable.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// js does not read values not assigned to any variable so the will be a syntax error not allowing the code to read .
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum (a ,b){
  return a + b ;
}
console.log(`The sum of 10 and 32 is ${sum(10.32)}`);