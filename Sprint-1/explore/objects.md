## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

-->Answer: ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?

-->Answer: console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`

-->Answer: 'object'

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

-->Answer: 
console: This is a built-in global object in JavaScript that provides access to the browser's debugging console. It includes various methods for logging information, warnings, errors, and more.

The dot (.) is used to access properties and methods of an object. In this case, it is used to access the log and assert methods of the console object.