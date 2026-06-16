## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get? // ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back? \\console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
\\ console is an object that stores methods used for debugging

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
\\ the . is used to access the properties inside the object. When you enter console.log(), you call the log method to print the output to the console
console.assert() will check a condition if True or False
