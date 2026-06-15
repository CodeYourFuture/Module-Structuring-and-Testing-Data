## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get? ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back? console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console` : 'object'

Answer the following questions:

What does `console` store?
console stores an object provided by the browser.

The object contains many methods such as log(), assert(),
warn(), error(), and debug(), which can be used for debugging
and displaying information.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
console.log and console.assert access properties of the
console object.

The dot (.) is the property access operator. It is used
to access a property or method stored inside an object.
For example: console.log
accesses the log method stored in the console object.
console.log("Hello")
calls the log method and prints "Hello" to the console.
