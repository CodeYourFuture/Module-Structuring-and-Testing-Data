## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
ANswer: I get this ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
Answer: {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
Answer: object

Answer the following questions:

What does `console` store?
Answer: Console stores a lot of objects like assert, clear, error, info, warn, log, debug and more.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
Answer: Console.log helps to print out a message.
Console.assert writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.
`.` is used to access the properties or methods of an object
