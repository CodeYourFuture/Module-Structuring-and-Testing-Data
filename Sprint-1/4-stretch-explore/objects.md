## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

what i get from Chrpme devtools Console:

>console.log
<.ƒ log() { [native code] }

>console
<.console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

>typeof console
<.object'

'console store': console is an object provided by the browser (in this case, Chrome).It stores functions for outputting information to the Console, such as:log(): Print general information.error(): Print error messages.warn(): Show warnings.info(): Show info-level messages.
assert(): Log a message only if a condition is false....and more

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
The . is the dot operator, used to access properties or methods of an object.
In console.log, you're accessing the log method on the console object.
So:
console = object
.log or .assert = method on that object

console is a built-in object
console.log is a method used to print messages to the Console
The . is used to access a method or property on an object


