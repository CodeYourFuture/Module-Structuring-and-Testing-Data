## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

OUTPUTS
`console.log` came back as ƒ log() { [native code] } after hitting enter

`console` came back as console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

typeof console came back as 'object'

ANSWERS
The console stores a collection of functions and data that allow javascript code to interact with the browser's debugging tools

The "." is known as a property accessor, it acts as a bridge telling the javascript to look inside the object on the left to find a specific item on the right.
