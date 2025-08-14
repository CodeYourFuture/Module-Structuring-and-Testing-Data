## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?


console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Answers:
The output of console.log is: ƒ log() { [native code] }.
Here:

ƒ means function.

log refers to the log method of the console object (console.log).

{ [native code] } means the function is built into the browser and not written in visible JavaScript code.

The output of console is:
{debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …},
which is an object consisting of several functions (methods), such as console.debug, console.info, console.log, and console.warn.

In the syntax console.log or console.assert, the dot (.) is used to access a property or method of an object.