Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
// The alert function displays a pop-up message on the screen with the message "Hello World!"

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
What effect does calling the `prompt` function have?
What is the return value of `prompt`?

// The 'prompt' function shows a pop-up that asks users to enter some text.The prompt() function return the text entered by the user. In my case its returned "Alexandra" and stored it in the myName variable.