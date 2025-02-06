## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
undefined if () were typed
ƒ log() { [native code] } if () were not typed

Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
object

Answer the following questions:

What does `console` store? some functions that can be called like "log"
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean? we are calling asset or log function from console which stores these functions
