# Sprint 1 — Mandatory Errors (Explanations)

## 0.js
- Error shown:
- Why it happens:
- MDN link (optional):
- Error shown: `SyntaxError: Unexpected identifier 'is'` on line 1.
- Why it happens: The file begins with plain English text that is not inside a comment or a quoted string. Node tries to interpret it as JavaScript code, but `This is ...` is not valid JS syntax, so parsing fails.
- MDN link (optional): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_token

## 1.js
- Error shown:
- Why it happens:
- MDN link (optional):
- Error shown: `TypeError: Assignment to constant variable.` on line 4.
- Why it happens: The variable `age` was declared with `const`, which prevents reassignment. The statement `age = age + 1` attempts to update the value, causing the error.
- MDN link (optional): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

## 2.js
- Error shown:
- Why it happens:
- MDN link (optional):
- Error shown: `ReferenceError: Cannot access 'cityOfBirth' before initialization`.
- Why it happens: The variable `cityOfBirth` is declared later in the file using `let` or `const`, but it is used before that declaration. JavaScript does not allow access to `let`/`const` variables before initialization (temporal dead zone).
- MDN link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init


## 3.js
- Error shown:
- Why it happens:
- MDN link (optional):
### 3.js

- Error shown: `TypeError: cardNumber.slice is not a function`
- Why it happens: The variable `cardNumber` is a number, and numbers do not have the `slice()` method. The `slice()` method is only available on strings and arrays.
- Concept: Methods depend on data types in JavaScript.
- MDN link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice


## 4.js
- Error shown:
- Why it happens:
- MDN link (optional):