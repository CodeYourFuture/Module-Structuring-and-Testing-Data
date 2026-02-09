## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
'object'

Answer the following questions:

What does `console` store?
The console stores a history of messages your code prints while it runs.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
You are accessing a function (a method) that belongs to the console object.
The `.` is used to access that method from the object.
