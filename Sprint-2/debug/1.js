// Predict ://This is because the sum function includes a return; statement on its own,
//which prevents the calculation a + b from being executed. As a result, the function doesn’t return a value, so it defaults to undefined.

//explain://The issue is that return; is used alone on line 4, which causes the function to end immediately without executing a + b. In JavaScript, 
//if a function does not return a value, it defaults to returning undefined. Therefore, when sum(10, 32) is used within the console.log statement, 
//undefined is displayed instead of the sum.

//Fix://To fix this, place return and the expression a + b on the same line so that the function returns the result of adding a and b:

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
