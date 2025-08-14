Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
A popup appears with the message ("Hello world!")

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
It opens a popup asking for the user’s name, and lets the user type something.
What is the return value of `prompt`?
A string that contains what the user typed (e.g. “Ahmad”).

If we were writing a program that uses prompt() to ask for an input value, how could
the program check if the user clicked "OK" or "Cancel"?

If the user clicks **OK**, it returns the string they typed, even an empty string when there is nothing written.

If the user clicks **Cancel**, it returns null.
