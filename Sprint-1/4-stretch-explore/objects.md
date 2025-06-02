## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get? 
//ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
// console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
// got 'object' as an output

Answer the following questions:

What does `console` store?
//console doesn't store. it displays.
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
//console.log log or display values to the console. Console.assert, check if a condition is true and in this case no output. Otherwise, an
// error message shows. As for the `,`, it's called the dot notation and it's used to access properties and methods of an object.
