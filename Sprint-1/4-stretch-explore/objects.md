## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
// we get the output `f log() { [ native code ] }`

Now enter just `console` in the Console, what output do you get back?
// we get the output `console {debug: f, error: f, info: f, log: f, warn: f, ...}`

Try also entering `typeof console`
// we get the output `'object'`

Answer the following questions:

What does `console` store?
// console is a built-in javascript object and it stores the different methods (or functions) that can be applied to it
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
// it is used to access properties or methods of an object: console is the built-in javascript object, dot is the property access operator (used to access the property), log & assert are methods (or functions) that belong to object console
