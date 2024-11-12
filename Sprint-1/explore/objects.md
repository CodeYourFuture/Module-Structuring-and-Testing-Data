## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
I get the following output: ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
I get the following output: console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
I get the following output: 'object'

Answer the following questions:

What does `console` store?
The console effectively prints information for diagnostic purposes.
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
The syntax is telling the console what to print in its output.
The '.' is a property accessor that gives JavaScript access to the object's properties, where the string after the dot is a valid identifier.
