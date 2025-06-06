## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
we get `object`

Answer the following questions:
What does `console` store?
Console as an `object` and within that object has several properties, these properties are functions like console.log, console.debug, console.error etc.
 
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
when you write console.log or console.assert, we are telling JavaScript "Go to the console object ..and find its log or assert property"