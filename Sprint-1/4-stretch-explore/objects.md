## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
Response: ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
Response: console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
'object'
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

REsponse: What does console.log mean?
console is an object that the browser gives you. Think of it like a tool or a box of useful functions for debugging (checking what's going on in your code).

log is a function inside that console object.

So when you write console.log(...), you're saying:

"Hey console, use your log tool to print something."

What does the . (dot) mean?
The dot (.) means "look inside".

