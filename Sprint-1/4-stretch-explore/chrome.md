Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
the browser shows a popup message box with your text — "Hello world!"

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

let myName = prompt("What is your name?");
The browser shows a popup with a text input box and OK / Cancel buttons.

What effect does calling the `prompt` function have?
It display a dialog box that prompts the user for input
What is the return value of `prompt`?
The text the user entered (string) if clicked OK, or null if Cancel
