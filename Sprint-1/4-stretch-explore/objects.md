## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
I got ƒ log() { [native code] } - shows the actual log function code

Now enter just `console` in the Console, what output do you get back?
Console {} - displays the console object with all its methods

Try also entering `typeof console`
"object" - confirms console is an object

Answer the following questions:

What does `console` store?
A built-in browser object that contains logging and debugging methods

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
The . is dot notation for accessing object properties

console.log means: access the log method that belongs to the console object

console is the parent object, log is one of its methods/functions