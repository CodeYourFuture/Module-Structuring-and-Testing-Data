## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}


Try also entering `typeof console`

Answer the following questions:

What does `console` store?
'object'

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
This syntax accesses a property or method on the console object.

The dot (.) is called dot notation.

console.log means:

Look inside the console object

Find the function named log

So console.log("Hi") is calling the log method of the console object.