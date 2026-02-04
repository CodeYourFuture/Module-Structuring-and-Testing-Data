## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
Getting a function log(): ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
{debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
'object'

Answer the following questions:

What does `console` store?
It stores different data such as, debug, error, info, log, warn, and etc.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
`console.log` is a built-in function used to output messages or values in the console
`console.assert` is also a built-in function used for debugging that writes an error message if an error exists otherwise it does nothing.
`.` is maybe used to access the console. `console.log()` means access the 'log()' method inside 'console' object
