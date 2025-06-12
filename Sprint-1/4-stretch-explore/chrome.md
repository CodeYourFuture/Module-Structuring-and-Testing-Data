Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
A pop up dialog box appears with the 'Hello world!' message and an 'OK' button.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in a variable called `myName`.

What effect does calling the `prompt` function have?
The browser displays a message in the popup box asking "What is your name?", there is a text input field as well as 'OK' and 'Cancel' buttons.

What is the return value of `prompt`? 
'undefined' but when I type 'name', my input is returned.
