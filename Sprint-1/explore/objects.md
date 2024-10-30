## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
Try also entering `typeof console`

Answer the following questions:

What does `console` store?
Stores various methods that allow interaction with the browser's debugging console. 
What does the syntax `console.log` or `console.assert` mean?
console.log  Means:access the log method of console (used to log messages)
cosole.assert Means:access the assert method of console (make assertions)

 In particular, what does the `.` mean?
 The dot (.) operator is used to access properties or methods of an object. 
