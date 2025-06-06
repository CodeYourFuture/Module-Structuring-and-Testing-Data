## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
f Log() {[native code]}

Now enter just `console` in the Console, what output do you get back?
console {debug: f, error: f, info: f, log, f, warn: f,...}
a full detailed list of methods or functions which can be expanded in the console to see al its properties.

Try also entering `typeof console`
'object'

Answer the following questions:

What does `console` store?
the console stores a collection of functions that provide different functionalities.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
The dot connect the main function console to sub-functions which are part of the shorthand. The '.' operator allow access to the properties that belong to console.
