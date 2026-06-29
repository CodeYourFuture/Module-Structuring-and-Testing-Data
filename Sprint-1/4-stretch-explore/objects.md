## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
It outputs: f log() {[native code]}

Now enter just `console` in the Console, what output do you get back?
It outputs: console {debug: f, error: f, info: f, log: f, warn: f, ...}

Try also entering `typeof console`: This outputs: 'object'

Answer the following questions:

What does `console` store?
console stores a collection of functions that allows outputting of information, display warnings, show errors, and interact with the browser's debugging tools. Eg: console.log, console.debug, console.assert,etc

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
The . is the dot operator, and it is used to access a property or method inside an object.
So:
console.log means "access the log function inside the console object".

console.assert means "access the assert function inside the console object".