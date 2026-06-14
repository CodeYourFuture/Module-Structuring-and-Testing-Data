## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] } it does not call the function the name of function and [native code] means browser can't show the code.

Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …} list of functions with their names 

Try also entering `typeof console`

'object'

Answer the following questions:

What does `console` store?
it holds collection methods like log and error. 
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
dot variable(.) used to access the methods of console object.