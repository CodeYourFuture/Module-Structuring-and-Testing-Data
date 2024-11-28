## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get? - f log() { [native code] }

Now enter just `console` in the Console, what output do you get back? - console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`

Answer the following questions:

What does `console` store? - objects
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

- The dot (.) is an operator that lets you access properties or methods of an object.
- console.log: log is a method (function) within the console object that outputs messages to the console.
- console.assert: assert is another method within the console object, which logs a message only if a specified condition is false.
