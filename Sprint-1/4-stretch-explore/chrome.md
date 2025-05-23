Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
	it  pops up a message box in the browser 

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
  This opens a dialog box with a text input field and the message myName:

What effect does calling the `prompt` function have?  It pops up a dialog box in the browser that:
    Displays the message: "What is your name?"
    Provides a text input field where the user can type a response
    Includes "OK" and "Cancel" buttons
What is the return value of `prompt`? return the  entered string, or null if canceled
