## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] } this output i got when i entered the 'console.log' this function is named 'log'.

Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …} it contains many functions, we can use it for logging and debugging.

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
The "console" stores the collection of functions used for logging and debugging your java code.
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
these are using dot notation, console is an object and log and assert are methods(functions).
dot means access a property or method that belongs to an object.
