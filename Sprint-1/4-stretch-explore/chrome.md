Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
// After calling the alert function with "Hello World!", I notice a pop-up on my screen displaying the message "Hello World!".

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
// After invoking the prompt function and storing its return value in the variable myName, I notice a pop-up on my screen with a text input field asking, "What is your name?".

What is the return value of `prompt`?
// The return value is whatever the user types in the input field. If the user clicks Cancel, the return value is null
