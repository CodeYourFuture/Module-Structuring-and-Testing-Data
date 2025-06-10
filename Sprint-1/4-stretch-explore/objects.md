## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

My answer: Undefined

Now enter just `console` in the Console, what output do you get back?

Try also entering `typeof console`

Answer the following questions: built-in 'object' in Console developer environment on Chrome V8.

What does `console` store?

My answer: console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …} The object `console` stores a list of logging and debugging functions.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

My answer: .log and .assert are methods(functions) attached to object `console`. The "." (dot) is a operator or member operator. `console.log` inspect variables, debug code. `console.assert` test condition. If the condition is False, it log a message about error. If Tru, it records nothing(console.log(condition, message)).
