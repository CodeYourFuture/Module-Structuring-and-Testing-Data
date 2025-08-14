## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
Answer:
The output is: ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
Answer:
The output is: console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
Answer:
The output is: 'object'

Answer the following questions:

What does `console` store?

Answer:
The console doesn't permanently store any values. It shows messages, errors, and the results of code you run. displays output and lets you test and store temporary values while the page is open.

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

Answer:
The console is a built-in object in JavaScript. It has different tools (called functions) like log and assert that help you debug and show messages while you're testing your code.
The . is used to access a property or method of an object.
