## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
    // We got output like: ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
    // We got: console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
    //We got: 'object'

Answer the following questions:

What does `console` store? 
    // Console store object, wich has methods to display different messages in console;
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
    //'.' - allows us to use functions and properties of console object.
    // `log` and `assert` are these functions 
    // `console.log` to display console messages
    // `console.assert`to write an error message to the console in case of assertion failed
