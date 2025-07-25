## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
The output is:
ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
The output is: console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
The output is:'object'

Answer the following questions:

What does `console` store?
It stores function for logging information, debugging and displaying messages in the browser's developer console.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
`console.log` means to use the log function that belongs to the console object to print messages to the console.”
`console.assert` means to use the assert method from the console object to test if something is true.
The `.` is called dot notation and it is used It is used in javascript to access properties or methods of an object.

