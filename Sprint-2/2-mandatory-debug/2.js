// PREDICT AND EXPLAIN FIRST...

// PREDICT THE OUTPUT OF THE FOLLOWING CODE:
// =============> hmmn the function doesn't give a indentifier to the value passed in, so num is not available in its scope. I'm not expecting the num defined at the beginning to be automatically global, but let's run it and see...

// || ORIGINAL CODE
// const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// NOW RUN THE CODE AND COMPARE THE OUTPUT TO YOUR PREDICTION
// =============> 
//  The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3
// ===> exciting! I'll have to look up how global/local variables work again XD


// EXPLAIN WHY THE OUTPUT IS THE WAY IT IS
// =============> write your explanation here
//"Functions form a scope for variables—this means variables defined inside a function cannot be accessed from anywhere outside the function. The function scope inherits from all the upper scopes. For example, a function defined in the global scope can access all variables defined in the global scope." - MDN 

// I TALKED TO CHATGPT ABOUT THIS:
/* 🚫  So, why are you "wrong"?

You're not exactly wrong — you're thinking in terms of encapsulation and good practice, which is correct in spirit. But using lots of global variables is generally discouraged for a few reasons:

    Namespace pollution: If many parts of your code use the same global space, variables might overwrite each other.

    Tight coupling: Functions that rely on globals are harder to reuse or test.

    Debugging nightmares: Bugs caused by globals can be hard to trace.

So, while JavaScript allows it, developers usually limit the use of global variables and instead use function parameters, closures, modules, or local scope. */

// 
// FINALLY, CORRECT THE CODE TO FIX THE PROBLEM
// =============> 

function getLastDigit(num) {        //made num a variable to pass into the function
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);