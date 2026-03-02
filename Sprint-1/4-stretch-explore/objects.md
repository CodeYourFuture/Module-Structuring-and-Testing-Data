## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
'object'

Answer the following questions:

What does `console` store?
console stores functions and allows you to display and inspect information in the browser console.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
console.log prints the value of whatever you ask it to print ie console.log(portfolio) would print the value of portfolio whereas console.log("portfolio") would print the actual word portfolio.

console.assert tests for a condition but only returns a message if the condition is false.  For instance it may be used to check the age of a person to restrict access to a site for adults only.

the full stop is used to separate the object from the method.  Console is the object and log and assert are methods