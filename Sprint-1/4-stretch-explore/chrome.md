Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

`answer` // there ll be a pop-up box showing a message and ask us to press ok in order to get rid of it.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
`answer` // Here we also have a pop-up box with an input, and it asks the user to type something.

What is the return value of `prompt`?
`answer` // if the user type something it returns `string` if the user cancel it then it return `null`.
