Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
it produces a pop up with the string that was passed to the alert function.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
the prompt function produces a pop up box with an input box so a user can type in information.
What is the return value of `prompt`?
it returns the value from the user input. 

If you were writing a program that uses prompt() to ask for an input value, how can
your program tell if the user clicked "OK" or "Cancel"?

the prompt function returns a string when the user presses ok, so even if the user does not type anything it will return an empty string. so we can test if the returned value is a string to determine if the user pressed ok.
on the other hand if the user presses cancel the function will return null, so we can test test if null got returned to check if a user had pressed cancel.