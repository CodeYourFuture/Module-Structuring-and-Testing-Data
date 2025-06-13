Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;
A; alert("Hello world!").
What effect does calling the `alert` function have?
A; I wrote this code in the Google Chrome console: alert("Hello world!").
This opens a modal dialog box with the text "Hello World!" It also interrupts the normal flow of execution until it is dismissed.
Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
A; let myName = prompt("What is your name?")
What effect does calling the `prompt` function have?
A; This opens a dialog box prompting the user for input.
What is the return value of `prompt`?
A; It returns the text the user types in, and stores it in the variable `myName`.
For example, if I typed "Alice", then `myName` would be "Alice".
