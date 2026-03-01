# Sprint 2 - 1 Key Errors (Answers)

## 0.js
- **Predicted error:**
- **Actual error:**
- **Why it happens:**
- **Minimal fix:**
- **Docs:**

## 1.js
- **Predicted error:**
- **Actual error:**
- **Why it happens:**
- **Minimal fix:**
- **Docs:**

## 2.js
- **Predicted error:**
- **Actual error:**
- **Why it happens:**
- **Minimal fix:**
- **Docs:**


## 0.js

- **Predicted error:** SyntaxError (variable redeclaration)

- **Actual error:** SyntaxError: Identifier 'str' has already been declared

- **Why it happens:**  
  The function parameter `str` is already declared. Inside the function, `let str = ...` attempts to redeclare the same variable in the same scope. JavaScript does not allow redeclaration of variables using `let`.

- **Minimal fix:**  
  Remove the `let` and return the new string directly:

  ```js
  function capitalise(str) {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
  }

  - **Docs:**  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let