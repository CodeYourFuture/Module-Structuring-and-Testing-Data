## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get? output: ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?output: console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console` output : object

Answer the following questions:

What does `console` store? stores a collection of methods (functions) that are used to log information or debug JavaScript code.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

This syntax uses dot notation. In JavaScript, the dot . is used to access a property or method of an object.

console is the object.
