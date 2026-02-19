Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
it shows a popup message in the browser.


Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
Shows a popup in the browser asking the user to type something.
The string "What is your name?" appears as the message in the popup.

What effect does calling the `prompt` function have?
Shows a popup dialog in the browser with a message

What is the return value of `prompt`?
If the user types something and clicks OK, returns that string.
