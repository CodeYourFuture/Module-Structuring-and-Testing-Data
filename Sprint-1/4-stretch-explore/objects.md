## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
-> ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
-> console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
->'object'

Answer the following questions:

What does `console` store?
->console stores an object that contains functions for outputting information to the browser’s debugging console.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
->The . operator accesses a specific property or method on an object. console.log means "use the log function from the console object.
console.assert means access the assert function inside the console object.