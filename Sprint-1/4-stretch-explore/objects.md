## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

I get ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?

I get console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`

Answer the following questions:

What does `console` store?

The console object contains a collection of methods and some internal states used for:

Logging messages

Displaying data

Measuring time

Counting executions

Tracing code execution

Testing conditions

Clearing output

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

The syntax `console.log` or `console.assert` uses dot notation, and the `.` is a way to access a property or method of an object in JavaScript. `console` is an object. `log` and `assert` are methods or functions that belong to that object. The `.` operator is used to access the properties or methods of that object.
