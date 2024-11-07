Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
Displays a popup dialog box with a message which in case is "Hello world!".

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
A prompt dialog will be displayed which asks "What is your name?". The user's input will be saved in `myName` variable if the user clicks ok.

What effect does calling the `prompt` function have?
What is the return value of `prompt`?
Calling the prompt function displays a dialog box with a message and an input field. It allows the user to enter text. The box also has "OK" and "Cancel" buttons.
If the user clicks "OK," it returns the text they entered as a string.
If the user clicks "Cancel" or closes the prompt, it returns null.





