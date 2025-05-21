## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
 console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}


Try also entering `typeof console`
'object'

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

The console is a built-in JavaScript object that stores debugging tools (like log, error, assert).

The dot is used to access a method or property inside an object. 