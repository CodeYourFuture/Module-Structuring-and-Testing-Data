## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
    ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
    console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
    'object'

Answer the following questions:

What does `console` store?
    - console is an object in JavaScript that provides access to various methods for logging and debugging.
    - The console object includes functions like log, warn, error, info, debug, and others that allow you to  display messages or warnings in the JavaScript console.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
    - The "." in console.log or console.assert is the dot notation, which is used to access properties or methods of an object.
    - console.log is a method of the console object. It logs messages to the console.
    - console.assert is another method of the console object that is used for testing conditions. It logs an error message if the condition provided is false.