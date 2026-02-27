## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
console.log
ƒ log() { [native code] }
ƒ stands for "function"
[native code] part just means it's a function built in so we can't see the actual underlying JavaScript code for it.

Now enter just `console` in the Console, what output do you get back?
console
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
I think it gives a options of methods i can use with the object console.

Try also entering `typeof console`
typeof console
'object'
from the name i can understand that typeof tells you the variable type so for console its object type.

Answer the following questions:

What does `console` store?
It stores a collection of methods.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
 It means that i want to use a method (e.g. `log` or `assert`) that belong to an object (e.g. `console`)
 `.` is dot notation, it means get the method from the object.

