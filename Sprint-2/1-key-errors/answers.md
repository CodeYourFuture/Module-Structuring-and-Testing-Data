# Sprint 2 - 1 Key Errors (Answers)

## 0.js
- Predicted error:
- Actual error:
- Why it happens:
- Minimal fix:
- Docs:

## 1.js
- Predicted error:
- Actual error:
- Why it happens:
- Minimal fix:
- Docs:

## 2.js
- Predicted error:
- Actual error:
- Why it happens:
- Minimal fix:



## 0.js

- Predicted error: SyntaxError (variable redeclaration)

- Actual error: SyntaxError: Identifier 'str' has already been declared

- Why it happens:  
  The function parameter `str` is already declared. Inside the function, `let str = ...` attempts to redeclare the same variable in the same scope. JavaScript does not allow redeclaration of variables using `let`.

- Minimal fix:  
  Remove the `let` and return the new string directly:

  ```js
  function capitalise(str) {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
  }

  - Docs:  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let



  ## 1.js
- Predicted error: SyntaxError (variable redeclaration)

- Actual error: SyntaxError: Identifier 'decimalNumber' has already been declared

- Why it happens:  
  The function parameter `decimalNumber` is already declared. Inside the function, `const decimalNumber = 0.5;` attempts to redeclare the same variable in the same scope. JavaScript does not allow redeclaration using `const`.

  There is also a second issue:  
  `console.log(decimalNumber);` is outside the function, and `decimalNumber` is not defined in the global scope. This would cause a ReferenceError.

- Concepts tested:  
  Variable scope, function parameters, redeclaration rules, global vs local variables.

  function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));