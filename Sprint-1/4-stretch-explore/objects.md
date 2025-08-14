## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, ...}

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
console stores a collection of functions (methods) used for displaying messages and debugging.
What does the syntax `console.log` or `console.assert` mean? In particular, 

what does the `.` mean? console is the object.
.log or .assert refers to a a function stored inside that object.The '.' is used to access a specific function (or property) inside the console object.
