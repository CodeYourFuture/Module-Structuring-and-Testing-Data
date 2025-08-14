Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
Calling the alert() function causes a pop-up dialog box which appear in the browser
displaying the message "Hello world!" and an OK button.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
Invoking the 'prompt' function causes an input pup-up dialog in the web browser displaying the message 'What is your name?' and waiting for information from the user.

What is the return value of `prompt`?
The return value that was provided by the user.
