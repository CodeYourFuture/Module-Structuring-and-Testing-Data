Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

The Effect: Calling alert pauses the browser execution and triggers a modal pop-up dialog box at the top of the screen displaying the text "Hello world!". It includes an "OK" button that the user must click to dismiss the alert and resume interacting with the page.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?

The Effect: Calling prompt opens a different type of pop-up dialog box that displays the message "What is your name?", a text input field for the user to type into, and two buttons: "OK" and "Cancel".
What is the return value of `prompt`?
The Return Value: * If you type a name (e.g., "Alex") and click OK, the function returns that exact text as a string (undefind). This string is what gets stored in your myName variable.
