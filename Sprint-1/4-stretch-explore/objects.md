## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
Answer : It shows  ƒ log() { [native code] }.

Now enter just `console` in the Console, what output do you get back?
Answer : It shows console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
Answer:object

Answer the following questions:

What does `console` store?
Answer:console is an object that stores methods for logging and debugging, like log, error, warn, assert, etc.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
Answer: The . accesses a property or method of the console object.
