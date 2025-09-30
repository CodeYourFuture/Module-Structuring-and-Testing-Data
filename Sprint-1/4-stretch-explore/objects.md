## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

-The output : ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?

-The output : console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …} + a lot of functions under it.

Try also entering `typeof console`

-The output : object

-Answer the following questions:

What does `console` store?

-Answer : console is an object with debugging methods.
It does not store variables or result. It provide methods for outputting , data , object and more.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

Answer:
-console is a built-in object.
-log and assert are properties of that object, specifically functions (methods).
-The console.assert() static method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.
-The console.log() static method outputs a message to the console.
-'.' means use this method from this object.
