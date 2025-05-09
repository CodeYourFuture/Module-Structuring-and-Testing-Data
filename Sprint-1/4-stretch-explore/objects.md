## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
// After entering console.log, I notice a new code output ƒ log() { [native code] }.

Now enter just `console` in the Console, what output do you get back?

// After calling console, I notice a dropdown appears, showing the console object with various functions {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
// i notice a return called objective which confirms that console is an object in JavaScript.

Answer the following questions:

What does `console` store?
// console is an object provided by the browser that stores logging and debugging methods like log(), error(), warn(),

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
// console is an objective, while .log is a method(function) inside the objective console.
// the `.` is a property access in javascript.
console.log() means access the log method from the console and use it for the objective.
