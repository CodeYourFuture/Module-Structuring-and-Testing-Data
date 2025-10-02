## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?

console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`

object

Answer the following questions:

What does `console` store?

It stores an object with built in methods

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

This syntax is accessing the log and assert methods, which are functions, in the console object. Through the use of the dot operator(.) we are able to access properties of an object.
