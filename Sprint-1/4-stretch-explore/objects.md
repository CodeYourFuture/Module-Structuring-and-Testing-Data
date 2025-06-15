## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.
// Open the Chrome devtools Console, type in `console.log` and then hit enter

// What output do you get?
// ƒ log() { [native code] }
// Explanation:
// This output tells us that console.log is a function (specifically a native function provided by the JavaScript engine).
// It is used to display messages in the browser console.


// Now enter just `console` in the Console, what output do you get back?
// console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
// Explanation:
// Typing console by itself shows that it's an object.
// This object contains several built-in functions (also called methods) like:
// log() – logs a message
// error() – logs an error
// warn() – logs a warning
// debug(), info(), etc.


// Try also entering `typeof console`
// "object"
// Explanation:
// The typeof operator confirms that console is of type object, meaning it can store properties and functions.


// Answer the following questions:

// What does `console` store?
// The `console` stores a collection of built-in functions (also known as methods) that are primarily used for debugging and displaying output in the browser's developer console. These methods include `log`, `error`, `warn`, `info`, `debug`, and others.

// What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
// The dot (.) in syntax like `console.log` or `console.assert` is called "dot notation".
// It is used to access a property or a method (which is a function stored as a property) of an object.
// So, `console.log` means:
// → "Access the `log` method (function) that belongs to the `console` object."
// Similarly, `console.assert` means "Access the `assert` method that belongs to the `console` object."