// Predict and explain first...
/* There will be a syntax error in the code because the variable `decimalNumber` is being declared twice within the same scope. The first declaration is in the function parameter, and the second declaration is inside the function body. This will cause a "SyntaxError: Identifier 'decimalNumber' has already been declared" error. secondly  variable `decimalNumber` is being logged to the console outside of the function, which will also cause a ReferenceError since `decimalNumber` is not defined in that scope.*/

// Why will an error occur when this program runs?/* The variable  'decimalNumber ' is being redeclared inside the function, which is not allowed since it was already declared as a parameter of the function. And the variable `decimalNumber` is being logged to the console outside of the function, which will cause a ReferenceError since `decimalNumber` is not defined in that scope.*/
// =============> write your prediction here. // This will cause a syntax error, additionally also cause a reference error since the variable `decimalNumber` is being logged to the console outside of the function, which will also cause a ReferenceError since `decimalNumber` is not defined in that scope.


// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here

/*/home/tobi/CYF/Module-Structuring-and-Testing-Data/Sprint-2/1-key-errors/1.js:11
  const decimalNumber = 0.5;
        ^

SyntaxError: Identifier 'decimalNumber' has already been declared
    at Object.compileFunction (node:vm:353:18)
    at wrapSafe (node:internal/modules/cjs/loader:1039:15)
    at Module._compile (node:internal/modules/cjs/loader:1073:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1138:10)
    at Module.load (node:internal/modules/cjs/loader:989:32)
    at Function.Module._load (node:internal/modules/cjs/loader:829:14)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
    at node:internal/main/run_main_module:17:47*/