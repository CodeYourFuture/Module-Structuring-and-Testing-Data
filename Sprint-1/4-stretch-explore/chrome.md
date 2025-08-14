Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
    -It causes the browser to display a modal popup box with the message "Hello world!"
    -It blocks interaction with the page until the user clicks "OK"
    -It returns undefined — the purpose is only to notify, not to receive input.

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
const myName = prompt("What is your name?");


What effect does calling the `prompt` function have?
browser displays a popup dialog box

What is the return value of `prompt`?
    A string - if the user types something and clicks OK
    An empty string ("") - if they click OK but type nothing
    null - if the user clicks Cancel
