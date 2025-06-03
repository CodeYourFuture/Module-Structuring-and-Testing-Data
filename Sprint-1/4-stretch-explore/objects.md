## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter
What output do you get?
    The function definition of log. Example: ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
    The console objects E.g: console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
    "object" because console is an object.

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
    It stores tools to show messages in the browser’s console.
    The . means “use this function from the console object.” For example, console.log means “use the log function from console.”