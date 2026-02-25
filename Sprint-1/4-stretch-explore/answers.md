## chrome.md

### What the task asked me to do
Explore the Chrome DevTools console and investigate what the console object stores and how dot notation works.

---

### What I did (steps)
1. Opened Chrome DevTools and navigated to the Console tab.
2. Entered `console.log` and observed that it returned a function.
3. Entered `console` and observed that it returned an object with multiple methods such as log, warn, error, and assert.
4. Entered `typeof console` and confirmed that console is an object.

---

### What I learned
- `console` stores an object containing many methods used for debugging.
- `console.log`, `console.assert`, etc. are functions stored inside the console object.
- The `.` operator is called dot notation and is used to access properties or methods of an object.

---

### Useful links
- https://developer.mozilla.org/en-US/docs/Web/API/Console
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects



## objects.md

### What output did I get?

- `console.log` → returned a function definition (ƒ log() { [native code] })
- `console` → returned an object with many methods such as log, warn, error, assert
- `typeof console` → returned "object"

---

### What does `console` store?
The console variable stores an object that contains multiple debugging methods. These methods allow developers to print messages, warnings, errors, and other diagnostic information in the browser console.

---

### What does `console.log` or `console.assert` mean?
These expressions use dot notation to access methods inside the console object.
For example:
- `console.log` accesses the log function
- `console.assert` accesses the assert function

---

### What does the `.` mean?
The dot operator is called dot notation.
It is used to access properties or methods of an object.

So:
- `console` is the object
- `log` is a method inside that object
- `console.log` means "access the log method from the console object"

---

### What I learned
- Objects store related data and functions together
- The browser console itself is an object
- Dot notation is how we interact with object properties and methods

---

### Useful links
- https://developer.mozilla.org/en-US/docs/Web/API/Console
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects