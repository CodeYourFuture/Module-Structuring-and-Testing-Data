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