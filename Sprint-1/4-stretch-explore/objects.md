## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
'object'

Answer the following questions:

What does `console` store?
It does not store anything. Its purpose is to hold a collection of methods (functions) that help you debug, log, or inspect your code.

What does the syntax `console.log` or `console.assert` mean?,
They print outputs.It provides methods for debugging, logging, and inspecting code.

In particular, what does the `.` mean?
The dot is a member access operator that connects the object to its property or method.
