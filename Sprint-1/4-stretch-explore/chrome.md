Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;
- Display a popup message with the text "Hello world!".

What effect does calling the `alert` function have?
- Pauses the script until the user clicks OK.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
- Calling the `prompt` function displays a dialog box with a message and an input field where the user can type a response.
What is the return value of `prompt`?
- Value of `prompt` returns the string entered by the user, or null if the user cancels the input.
