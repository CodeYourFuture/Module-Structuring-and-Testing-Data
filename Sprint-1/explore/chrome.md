Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

1. It displays a dialog with a message and an OK button.
2. It contains an OK button that the user must click to close the dialog box.
3. Interaction with the rest of the webpage is blocked until the alert is dismissed.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?

1. A modal dialog box will appear with the message "What is your name?" and a text input field.
2. The dialog box also contains two buttons: "OK" and "Cancel".

What is the return value of `prompt`?

1. If the user enters a value and clicks "OK," the value they entered is returned, and this value will be stored in the variable myName.
2. If the user clicks "Cancel" or closes the dialog box without entering anything, the prompt function will return null.
