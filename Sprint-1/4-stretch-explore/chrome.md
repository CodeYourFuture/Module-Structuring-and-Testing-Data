Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
 answer : Displays a pop-up dialog box with a message and an OK button; execution pauses until OK is clicked.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
Displays a pop-up dialog box with a message and a text input field; execution pauses until OK or Cancel is clicked.

What is the return value of `prompt`?
Returns the string entered by the user if OK is clicked, or null if Cancel is clicked.
