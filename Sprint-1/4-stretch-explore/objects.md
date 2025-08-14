## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?

- this was the output "ƒ log() { [native code] }"

Now enter just `console` in the Console, what output do you get back?

- this was the output "console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}"

Try also entering `typeof console`

- It returned "object"

Answer the following questions:

What does `console` store?

- It stores debugging methods like, log, error, assert.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

- console.log means outputting information to the console.
  -console.assert means to perform a conditional check in JavaScript, where it logs an error message to the console only if a specified condition are false.
