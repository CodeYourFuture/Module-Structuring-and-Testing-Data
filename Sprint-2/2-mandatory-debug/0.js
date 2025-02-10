// Predict and explain first...
//The problem in this code is we have the variables and the operation inside the console log but it doesnt return any value
//so it must be written in the way that it would return the product of the two numbers insude the function
//and then we can console log the result out side the function by calling the function


function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
//in this code we wrongly place console log inside the function to print something which didnt even returned 
//this is wrongly assumed

// Finally, correct the code to fix the problem
/*
function multiply(a, b) {
 let prodResult = a*b;
 return prodResult;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/
