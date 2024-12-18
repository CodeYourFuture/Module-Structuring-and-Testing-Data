## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
'object'

Answer the following questions:

What does `console` store?
console stores the different method/properties that can be use to interact with the browser debugging console.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

console.log: Writes the argument/parameter provided to it to the console.

console.assert: writes an error message to the console if the assertion is false. That is, if the argument provided to it evaluated to false.

what does the `.` mean?
This represent the concepts of dot notation in object oriented programming. The property accessor used to access the properties of an object.