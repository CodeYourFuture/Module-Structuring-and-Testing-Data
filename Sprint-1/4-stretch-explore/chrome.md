Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have? It displays a popup message box with a text saying Hello world! and pauses the website in until you click ok to unpause it.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have? The prompt function displays a popup box asking you to enter a text and pausing the page until you click ok or cancel.

What is the return value of `prompt`? Prompt returrns the text enterend by the user as a string if the user clicks OK, and returns null if the user clicks cancel.
