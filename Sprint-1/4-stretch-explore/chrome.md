Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
// Calling the alert function causes a popup message box to appear in the browser window. This box displays the message "Hello world!", and the user must click “OK” to close it.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have? Calling the prompt function shows a popup asking "What is your name?" and a text input field asking the user to enter text, and click "ok" or "cancel". 
What is the return value of `prompt`? The return value of prompt is the text the user types, as a string, or null if they click "Cancel". The result can be stored in a variable, myName, to be used later in the program.
