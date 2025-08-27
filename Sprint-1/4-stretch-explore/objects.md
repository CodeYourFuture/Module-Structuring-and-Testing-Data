## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }
Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
Try also entering `typeof console` // object

Answer the following questions:

What does `console` store? different functions (methods) like s log messages, show errors, warnings

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?`console.log` means accessing 'log' function inside 'console' object
`console.assert` mean accessing 'assert' function inside 'console' object
`.` is the dot notation and It’s used to access properties or methods of an object.
