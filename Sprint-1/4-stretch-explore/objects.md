## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
--> ƒ log() { [native code] }
Now enter just `console` in the Console, what output do you get back?
--> console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …} but this opens up with a lot of extra options
Try also entering `typeof console`
--> object
Answer the following questions:

What does `console` store? --> the browser's debugging methods (log, error etc)
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
--> the dot means access the property or method on the object.
eg in console.log log is the method and console is the object
