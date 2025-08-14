## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
- The output is ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
- I get an object: console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
Try also entering `typeof console`
- I get 'object' as output

Answer the following questions:

What does `console` store?
- it stores an object
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
- console.log allows us to output messages to the console.
- console.assert outputs a message to the console only when an expression evaluates to false.
- `.` the dot operator is used to access the assert() because it's a method on the console object.
