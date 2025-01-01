## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
I get    ƒ log() { [native code] }


Now enter just `console` in the Console, what output do you get back?

Console {log: ƒ, warn: ƒ, error: ƒ, assert: ƒ, ...}


Try also entering `typeof console`
'object'

Answer the following questions:

What does `console` store?
Console {log: ƒ, warn: ƒ, error: ƒ, assert: ƒ, ...}
so it stores a methods and properties like
             log
             warn
             error
             assert

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
 The dot notation (.) in console.log or console.assert means accessing a method (function) that belongs to the console object.
 -console.log refers to the log method of the console object.
-console.assert refers to the assert method of the console object.


