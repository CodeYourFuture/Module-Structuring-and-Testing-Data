## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
I get the function definition for console.log (function log()).

Now enter just `console` in the Console, what output do you get back?
I get console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
console stores an object with many functions like log, error, warn, assert.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
console.log or console.assert means we are calling a function inside the console object.
The dot (.) means “access this property of the object”.
