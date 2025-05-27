## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter
    

What output do you get?
    - ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
    - console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
Try also entering `typeof console`
    - 'object'
Answer the following questions:

What does `console` store?
    - JavaScript messages, variables, errors, and other data to the browser's console.
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
    - `console.log` function to display console messages
    - `console.assert`function to write an error message to the console when of assertion failed
    - '.' - allows us to use functions and properties of an object.

