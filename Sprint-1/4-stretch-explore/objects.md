## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

=>What output do you get?
ƒ log() { [native code] }

=>Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

=>Try also entering `typeof console`
'object'
Answer the following questions:

=>What does `console` store?
console is an object that stores several methods (functions) used to interact with the browser's developer tools.

Examples include:

console.log() – print messages

console.error() – print error messages

console.warn() – print warnings

console.table() – display tabular data

console.assert() – test expressions and log only if the test fails

=>What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

The dot (.) is called the dot operator, and it is used to access a property or method on an object.

So:
console.log means: "access the log function stored inside the console object"

console.assert means: "access the assert function from the same object"