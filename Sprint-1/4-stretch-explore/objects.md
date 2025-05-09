## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
'object'

Answer the following questions:

What does `console` store?

This is a built-in global object in JavaScript that provides access to the browser's debugging console. It includes various methods for logging information, warnings, errors, and more.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
The dot (.) is used to access properties and methods of an object. In this case, it is used to access the log and assert methods of the console object.