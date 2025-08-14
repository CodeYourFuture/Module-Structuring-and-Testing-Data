Open a new window in Chrome,

then locate the **Console** tab. (short cut for linux ctrl+shift+j)

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;
ans: done!

What effect does calling the `alert` function have?
ans: pops out a message with given strings inside alert arguments

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
ans: myname = prompt("What is your name?");

What effect does calling the `prompt` function have?
ans: pops out a message with input field and we can store the input value into a variable

What is the return value of `prompt`?
ans: return value is the string given by user
