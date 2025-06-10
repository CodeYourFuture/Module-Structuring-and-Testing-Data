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
It doesn't store anything .It is an object includes of some methods for representing messages or information in the browser but we can store the output in a variable.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
. is used for access to the properties or methods of an object.
