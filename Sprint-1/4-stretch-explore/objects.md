## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

. ƒ log() { [native code] }


Now enter just `console` in the Console, what output do you get back?

. console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`

. 'object'

Answer the following questions:

What does `console` store?
he console stores logs messages, errors and wornning , user input/output, variables and objects, and results of expressions you run.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

console is a built in object
console.log means Accessing the log on the built in object which is the console
console.assert means Access the assert method on the console object
'.' it is an operator which is used to access a property or method of an object.