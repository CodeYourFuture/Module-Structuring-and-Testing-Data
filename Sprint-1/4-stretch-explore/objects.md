## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
This is what I get: ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
output: console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
I get "Object"

Answer the following questions:

What does `console` store?
The console object provides access to the browser's debugging console (or terminal in Node.js). It is used to log information, debug code, and interact with the runtime environment during development. Not a place to store data.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
The `.` is the dot operator used to access properties and methods of an object.
In this case, console.log means: access the log method on the console object; and console.assert means: writes an error message to the console if the assertion is false. Nothing happens if the assertion is true.
