## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

    console.log
    ƒ log() { [native code] }
    Explanation:
    This output indicates that console.log is a function provided by the browser (native code). You are seeing the function itself, not executing it.


What output do you get?

Now enter just `console` in the Console, what output do you get back?

    console
    and press Enter, the Console shows something like:

    console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
    Explanation:
    This output shows that console is an object containing multiple methods, such as:

    * log
    * error
    * warn
    * info
    * debug

    Each of these properties is a function that can be used to output messages to the Console in different ways.

Try also entering `typeof console`

    typeof console
     'object'

Answer the following questions:

What does `console` store?
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

    console is an object

    It stores methods (functions)

    . is used to access properties or methods on an object

    log / assert → a property of console (in this case, a function)

    console stores an object.
    This object contains properties and methods (mostly functions) provided by the browser for debugging, such as log, error, warn, info, and assert.  


