Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

- It shows a modal pop-up box.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?

- The browser shows the pop-up dialogue box with the question `"What is your name?"`, two buttons "Cancel" and "Ok" and text input field where user can type their name

## What is the return value of `prompt`?

- If user typed something in the text input field that'll be the return value with data type String, even if user typed numbers. If user pressed "Cancel" button, then value'll be null.
