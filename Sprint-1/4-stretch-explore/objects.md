## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get? 
ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
Object

Answer the following questions:

What does `console` store?
Console is an object storing a collection of functions for logging, debugging and inspecting code.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
The dot is the property access operator in JavaScript 
Console.log means : get the log property from the console object
log is a function so can be called using parentheses
console.assert can test for assumptions in the code, if the condition is true nothing happens but if its false it prints an error message.
