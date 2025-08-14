Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

A popup dialog appears in the browser window with the message "Hello world!" and an OK button.
It's a simple way to show a message to the user.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
A popup appears that:

Shows the message: "What is your name?" Includes a text input field

Has OK and Cancel buttons


What is the return value of `prompt`?
The prompt() function returns:

The string the user types (e.g., "ٍSalah")

null if the user clicks Cancel instead of OK