## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
A; It returns: `ƒ log() { [native code] }` — this means `log` is a built-in function.

Now enter just `console` in the Console, what output do you get back?
A; It returns an object with properties like `log`, `error`, `warn`, etc.

Try also entering `typeof console`
A; Returns `"object"`

Answer the following questions:

What does `console` store?
A; It stores a collection of useful functions for logging and debugging in the browser or Node.js environment.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
A; These are function calls on the `console` object. The dot `.` means we are accessing a property (in this case, a function) from the object. 