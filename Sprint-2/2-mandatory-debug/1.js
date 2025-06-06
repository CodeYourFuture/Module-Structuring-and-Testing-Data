// Predict and explain first...
/*
I predict that this function will return either 'undefined' or an error because the return statement hasn't got anything to return and is placed before the expression that adds the two numbers together. 
*/

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

/*
The issue is within the function body of the sum function. If a function has an expression within it, it must be executed first before a return statement, because otherwise the return statement has nothing to return. Also if the return statement is used without a value the function immediately exits and returns undefined - therefore the correct return statement here would be "return a + b". Without this proper return statement the external console.log will struggle trying to evaluate the sum function, as it will not find a value to log from that function. Even though the function receives the inputs 10 and 32, it does nothing with them and returns undefined. As a result, the output will be: 'The sum of 10 and 32 is undefined'.
*/

// Finally, correct the code to fix the problem
function sum(a, b) {
  a + b;
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
