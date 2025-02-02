## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get? Answer: ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back? 
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`

Answer the following questions:

What does `console` store? Answer: console is an object containing various methods for logging information to the browser's console, as well as for debugging purposes
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
Answer: console refers tp the object that contains methods/functions for treating data
        .log and .assert refers to the functions the the console objct
        . allows acess to the method of te function in the console object
