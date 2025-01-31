## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
Console { memory: MemoryInfo, log: ƒ, warn: ƒ, error: ƒ, ... }


Try also entering `typeof console`
"object"


Answer the following questions:

What does `console` store?
It is using for debugging and store methods like: console.log() → Prints messages to the console.
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
console.log means "use the log function from the console object."
console.assert means "use the assert function from the console object."
The . (dot) is like opening a toolbox to pick a specific tool.
