## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }


Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
typeof(console);
'object'

Answer the following questions:

What does `console` store?
console is a built-in JavaScript object provided by browsers (like Chrome, Firefox, etc.). It stores a collection of functions that help developers log, debug, and inspect values during runtime.
It doesn’t store data like a variable; instead, it holds methods (a.k.a. functions) like:
console.log() – print to the console
console.error() – print errors
console.warn() – print warnings
console.assert() – test if an expression is true

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
- `console.log` or `console.assert`
These are method calls on the console object.
You're telling JavaScript: "Use the log or assert method that belongs to the console object."
- the `.` mean
The dot (.) is the member access operator in JavaScript.
It accesses a property or method of an object