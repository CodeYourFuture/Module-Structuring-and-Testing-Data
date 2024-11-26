## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console` => 'object'

Answer the following questions:

What does `console` store?

The console stores methods for logging information, errors, warnings, and other messages in the JavaScript environment.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

console.log or console.assert means you are using methods from the console object in JavaScript. The . (dot) is used to access these methods. For example, console.log lets you print messages to the console, while console.assert checks if a condition is true and shows an error message if it is false.
