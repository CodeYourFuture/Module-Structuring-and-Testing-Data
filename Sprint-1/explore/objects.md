## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get? 
ƒ log() { [native code] } 
(log is a function (that's what the ƒ symbol means).
It's a "native" function, meaning it's built into the browser's JavaScript engine)

Now enter just `console` in the Console, what output do you get back? 
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
console is an object.
It contains multiple functions (methods) like debug, error, info, log, warn, etc.

Try also entering `typeof console`
it returns object because console is an object.

Answer the following questions:

What does `console` store? methods. console is a toolbox full of different tools.
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean? 
The dot tells JavaScript "look inside this object (console) and give me access to this specific method (log or assert)"
