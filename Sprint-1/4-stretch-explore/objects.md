## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
I get this: ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
I get this: console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
I get : object

Answer the following questions:

What does `console` store?
Console is an object that lets you print messages, errors, warnings etc

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
console.log allows you to print messages while assert checks a condition. 
