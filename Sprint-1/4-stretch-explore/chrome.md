Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

Answer: A modal window pop up showing Hello World! on it.

What effect does calling the `alert` function have?

Answer: When the modal window pop up, user would see message "Hello World!" and has to click OK on the window.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?

Answer: A modal window pop up showing a question 'What is your name?' on it and a input field in shown under it for user to insert the name.

What is the return value of `prompt`?

Answer: 'Undefined' is shown in the return value.
