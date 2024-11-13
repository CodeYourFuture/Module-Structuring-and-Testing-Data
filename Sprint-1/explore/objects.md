## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

## Heres the output I got. ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?

## Heres the output I got. console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`

## Heres the output I got. 'object'

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

## I think console.log, basically logs or send the value we passed to the console and displays it on the console. console.assert basically checks if a value is true or not. The . operator says function which is an object and calls functions that fall under console.

## GPT has a better explantion it says, console is an object in JavaScript that provides access to the browser's debugging console. It is used to log information, errors, or perform other debugging tasks. console.log and console.assert are methods of the console object:

## console.log(): Used to output information to the console.console.assert(): Used to test if a condition is true; if false, it logs an error message to the console. The . (dot) is the accessor operator, which is used to access properties or methods of an object. For example, console.log accesses the log method of the console object.
