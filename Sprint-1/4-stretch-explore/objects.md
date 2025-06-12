## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get? 
ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`

Answer the following questions:

What does `console` store? 'object'
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

`console.log` and `console.assert` are both function calls to methods for the built-in console:

console.log(): shows messages in the console
console.assert(): checks if something is true and logs an error if it’s not.

The . (dot) is called the dot operator. It's used to access a property or function that belongs to an object.