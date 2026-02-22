## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
I get ƒ log() { [native code] } as my output when i type console.log and then hit enter in console.

Now enter just `console` in the Console, what output do you get back?
The output i get is console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
The output i get 'object'

Answer the following questions:

What does `console` store?
console does NOT store values.
It is used to output.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
console.log is use print the output.
console.assert if the condition is true nothing happen 
if the condition failed it will print assertion failed.
"."  the member access operator in JavaScript.
it is used to connects the console object with log method.


