## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
Answer:  When you type console.log (without parentheses) and press Enter, it returns the function definition for console.log, showing that it’s a function:    function log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
Answer: When you enter just console and press Enter, you’ll see an object with many properties and methods:       Console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
Answer:    typeof console:    This returns "object", showing that console is an object.

Answer the following questions:

What does `console` store?
Answer:   console is a global object in JavaScript that provides a collection of methods for outputting information to the console. These methods are useful for debugging and include log, warn, error, assert, and others.



What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
Answer:   The . (dot) is the member access operator. It’s used to access properties and methods of an object in JavaScript. So, console.log accesses the log method of the console object, and console.assert accesses the assert method.