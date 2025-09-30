Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

Answer: A pop up window displaying a text (Hello World!) will appear on the top and an OK button. It's a temporarily effect, but it required a user interaction to press OK before continuing.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
What is the return value of `prompt`?

Answer: A pop up window appears with a title and a question (What is your name?), also an answering space area. At the right down of the window there are two buttons to the user, Ok and cancel.
After typing myName and press OK the console display the answer(myName).
