Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
This shows a popup alert box with the message:
"Hello world!"
It interrupts the webpage until the user clicks "OK".

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
What is the return value of `prompt`?

This opens a popup input box with the prompt:
"What is your name?"
The user can type their name, then click "OK" or "Cancel"
If the user enters "Rahwa" and clicks OK → myName becomes "Rahwa" (a string).
If the user clicks Cancel → myName becomes null.