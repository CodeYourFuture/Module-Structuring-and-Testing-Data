## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get? Answer : ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back? Answer: {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`

Answer the following questions:

What does `console` store?- object -  Answer: console is not designed to store any data. it output with messages , error and other useful data

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
console.log : to output messages,errors and variebles
console.assert :  prints a message to the console only if an expression evaluates to false
`.` : it calls functions which belongs to that object