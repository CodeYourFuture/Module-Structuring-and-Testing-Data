// Predict and explain first...

// =============> write your prediction here

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

//output= The result of multiplying 10 and 32 is undefined

// =============> write your explanation here
//The function runs console.log(10 * 32) print the result = 320 
// after it runs the function dosen't have a return anything ang gives =  undefined.

// Finally, correct the code to fix the problem
//  =============> to use the function that gives a result need to use RETURN not consol.log inside the function

function multiply(a, b) {
  const forAllMutiply = (a * b);
  return forAllMutiply; //return can be use for diferents values/results
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

//output= The result of multiplying 10 and 32 is 320