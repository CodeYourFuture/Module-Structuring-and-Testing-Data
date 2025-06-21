## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

//ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
//console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
Try also entering `typeof console`

//object

Answer the following questions:

What does `console` store?

// it stores tools to show messages in the browser's console

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

//The . is the property accessor operator in JavaScript. It’s used to access properties or methods on an object. Here:

console is the object.

log or assert is a property of that object (specifically, a method/function).

So, console.log means: “Access the log method on the console object.”
