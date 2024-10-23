## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
console: {
log: ƒ,
warn: ƒ,
error: ƒ,
info: ƒ,
assert: ƒ,
...
}

Try also entering `typeof console`
"object"

Answer the following questions:

What does `console` store?

1. `console` is an object that contains methods for logging messages to the console.
2. It is a built-in object in JavaScript that provides a set of methods for debugging and logging information.

What does the syntax `console.log` or `console.assert` mean?
In particular, what does the `.` mean?

- The dot `.` is used to access the methods of the `console` object.
- `console.log` is a method that logs a message to the console.
- `console.assert` is a method that logs a message to the console if the assertion is false.
