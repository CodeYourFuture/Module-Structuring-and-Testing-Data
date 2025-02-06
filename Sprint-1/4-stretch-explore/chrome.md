Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
A pop-up box will appear with the message "Hello world!"

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

let myName = prompt("What is your name?");
console.log(myName);
console.log(typeof(myName));

What effect does calling the `prompt` function have?
prompt() expects a return message from the user.

What is the return value of `prompt`?
If the user enters a message then is a string or null if user click cancel button and no message has been added.
